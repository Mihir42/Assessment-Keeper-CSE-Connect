import PropTypes from 'prop-types';
import Modal from '../UI/Modal';
import Accordion from '../UI/Accordion';
import { useState } from 'react';

export default function StudentAssessmentAccordion({ assessment, isFavourite }) {
	const [active, setActive] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const validDateTime = (new Date(new Date(assessment.AssessmentPublishdate).getTime() - new Date(assessment.AssessmentPublishdate).getTimezoneOffset() * 60000).toISOString()).slice(0, -1);

	return (
		<>
			<Modal title={`Edit: ${assessment.AssessmentName}`} show={showModal} setShowModal={setShowModal}>
				<form>
					<label>Name:</label>
					<input type="text" className="input-field" defaultValue={assessment.AssessmentName} />
					<label>Publish Date:</label>
					<input type="datetime-local" className="input-field" defaultValue={validDateTime}/>
				</form>
			</Modal>

			<Accordion active={active} header={
				<button className={`accordion-button row ${active ? '' : 'collapsed'}`} type="button" onClick={() => setActive(!active)}>
					<div className="col-sm-8">{assessment.AssessmentName}</div>
					<div className="col-sm-3">{new Date(assessment.AssessmentPublishdate).toLocaleDateString('en-GB')}</div>
				</button>
			}>
				<>
					<p>{assessment.AssessmentAssessmenttypeDescription}</p>
					<p>Page URL: <a href={assessment.AssessmentBriefURL}>{assessment.AssessmentBriefURL}</a></p>
					<button className="btn">
						{isFavourite ? 	<i className="fa fa-star" style={{ color: 'yellow' }}></i> : <i className="fa fa-star-o"></i>}
					</button>
				</>
			</Accordion>
		</>
	);
}

StudentAssessmentAccordion.propTypes = {
	isFavourite: PropTypes.bool,
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
