import PropTypes from 'prop-types';
import { Accordion } from '../UI';
import { useState, useContext } from 'react';
import { UserContext } from '../../App.jsx';
import APIWrapper from '../../utils/API';

export default function StudentAssessmentAccordion({ assessment, isFavourite }) {
	const [active, setActive] = useState(false);
	const user = useContext(UserContext);
	const API = new APIWrapper();

	async function updateFavourite() {
		try {
			if (isFavourite) {
				// need to delete
				await API.delete(`favourites/${isFavourite.FavouriteID}`);
				alert(`Deleting favourite with ID: ${isFavourite.FavouriteID}`);
			} else {
				// Add
				await API.post('favourites/', {
					FavouriteID: null,
					FavouriteLikerID: user.UserID,
					FavouriteLikedID: assessment.AssessmentID,
					FavouriteCategory: 'Assessments',
				});
				alert('Adding favourite.');
			}
		} catch (err) {
			console.log(err);
		}
	}

	function downloadCalenderFile() {
		const yyyy = `${new Date(assessment.AssessmentPublishdate).getFullYear()}`;
		const mm = `${new Date(assessment.AssessmentPublishdate).getMonth()}`.padStart(2, '0');
		const dd = `${new Date(assessment.AssessmentPublishdate).getDate()}`.padStart(2, '0');

		const bytes = new TextEncoder().encode(`
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:${assessment.AssessmentAssessmenttypeDescription}
DTSTART;VALUE=DATE:${yyyy}${mm}${dd}
DTEND;VALUE=DATE:${yyyy}${mm}${Number(dd) + 1}
LOCATION:Uni
SUMMARY;LANGUAGE=en-us:${assessment.AssessmentName}
END:VEVENT
END:VCALENDAR
`);
		const blob = new Blob([bytes], {
			type: 'application/json;charset=utf-8',
		});
		// Create blob link to download
		const url = window.URL.createObjectURL(new Blob([blob]));
		const link = document.createElement('a');
		link.href = url;
		link.setAttribute('download', `${assessment.AssessmentName}.ics`);

		// Add to page, click and then remove from page
		document.body.appendChild(link);
		link.click();
	}

	return (
		<>

			<Accordion active={active} header={
				<button className={`accordion-button row ${active ? '' : 'collapsed'}`} type="button" onClick={() => setActive(!active)}>
					<div className="col-sm-8">
						<button className="btn" onClick={() => updateFavourite()}>
							{isFavourite ? <i className="fa fa-star" style={{ color: 'yellow' }}></i> : <i className="fa fa-star-o"></i>}
						</button>
						{assessment.AssessmentName}
					</div>
					<div className="col-sm-3">{new Date(assessment.AssessmentPublishdate).toLocaleDateString('en-GB')}</div>
				</button>
			}>
				<>
					<p>{assessment.AssessmentAssessmenttypeDescription}</p>
					<p>Page URL: <a href={assessment.AssessmentBriefURL}>{assessment.AssessmentBriefURL}</a></p>
					<button className="btn" onClick={() => downloadCalenderFile()}>Download Calender file</button>
				</>
			</Accordion>
		</>
	);
}

StudentAssessmentAccordion.propTypes = {
	isFavourite: PropTypes.shape({
		FavouriteID: PropTypes.number,
		FavouriteLikerID: PropTypes.number,
		FavouriteLikedID: PropTypes.number,
		FavouriteCategory: PropTypes.string,
	}),
	assessment: PropTypes.shape({
		AssessmentID: PropTypes.number,
		AssessmentName: PropTypes.string,
		AssessmentPublishdate: PropTypes.string,
		AssessmentSubmissiondate:PropTypes.string,
		AssessmentFeedbackdate:PropTypes.string,
		AssessmentBriefURL: PropTypes.string,
		AssessmentModuleID: PropTypes.number,
		AssessmentAssessmentTypeID: PropTypes.number,
		AssessmentModuleName: PropTypes.string,
		AssessmenttypeDescription: PropTypes.string,
		AssessmentAssessmenttypeDescription: PropTypes.string,
	}),
};
