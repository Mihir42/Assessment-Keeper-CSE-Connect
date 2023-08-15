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
