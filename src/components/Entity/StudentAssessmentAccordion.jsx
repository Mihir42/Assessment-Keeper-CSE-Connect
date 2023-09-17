import PropTypes from 'prop-types';
import { Accordion } from '../UI';
import { useState, useContext } from 'react';
import { UserContext } from '../../App.jsx';
import APIWrapper from '../../utils/API';
import { NavLink } from 'react-router-dom';

export default function StudentAssessmentAccordion({ assessment, favourites, setFavourites }) {
	const [active, setActive] = useState(false);
	const user = useContext(UserContext);
	const API = new APIWrapper();

	async function updateFavourite() {
		const isFavourite = favourites.find(f => f.FavouriteLikedID == assessment.AssessmentID);
		try {
			if (isFavourite) {
				// need to delete
				await API.delete(`favourites/${isFavourite.FavouriteID}`);
				setFavourites([...favourites.filter(f => f.FavouriteID !== isFavourite.FavouriteID)]);
			} else {
				// Add
				await API.post('favourites/', {
					FavouriteID: null,
					FavouriteLikerID: user.UserID,
					FavouriteLikedID: assessment.AssessmentID,
					FavouriteCategory: 'Assessments',
				});
				setFavourites([...favourites, { FavouriteLikerID: user.UserID, FavouriteLikedID: assessment.AssessmentID }]);
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
							{favourites.find(f => f.FavouriteLikedID == assessment.AssessmentID) ? <i className="fa fa-star" style={{ color: 'yellow' }}></i> : <i className="fa fa-star-o"></i>}
						</button>
						{assessment.AssessmentName}
					</div>
					<div className="col-sm-3">{new Date(assessment.AssessmentPublishdate).toLocaleDateString('en-GB')}</div>
				</button>
			}>
				<>
					<p>{assessment.AssessmentAssessmenttypeDescription}</p>
					<p>Page URL: <a href={assessment.AssessmentBriefURL}>{assessment.AssessmentBriefURL}</a></p>
					<NavLink to={`/assessments/${assessment.AssessmentID}`}>Go To</NavLink>
				</>
			</Accordion>
		</>
	);
}

StudentAssessmentAccordion.propTypes = {
	favourites: PropTypes.arrayOf(PropTypes.shape({
		FavouriteID: PropTypes.number,
		FavouriteLikerID: PropTypes.number,
		FavouriteLikedID: PropTypes.number,
		FavouriteCategory: PropTypes.string,
	})),
	setFavourites: PropTypes.func,
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
