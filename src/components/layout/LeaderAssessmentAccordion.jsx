import PropTypes from 'prop-types';
import Modal from '../UI/Modal';
import Accordion from '../UI/Accordion';
import { useState } from 'react';

export default function LeaderAssessmentAccordion({ id, assessment }) {
	const [active, setActive] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const validDateTime = (new Date(new Date(assessment.AssessmentPublishdate).getTime() - new Date(assessment.AssessmentPublishdate).getTimezoneOffset() * 60000).toISOString()).slice(0, -1);

	return (
		<>
			<Modal id={id} title={`Edit: ${assessment.AssessmentName}`} show={showModal} setShowModal={setShowModal}>
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
					<button type="button" className="btn btn-secondary" onClick={() => setShowModal(true)}>
						Launch static backdrop modal
					</button>
				</>
			</Accordion>
		</>
	);
}

LeaderAssessmentAccordion.propTypes = {
	id: PropTypes.number,
	assessment: PropTypes.shape({
		AssessmentID: PropTypes.number,
		AssessmentName: PropTypes.string,
		AssessmentPublishdate: PropTypes.string,
		AssessmentSubmissiondate:PropTypes.string,
		AssessmentFeedbackdate:PropTypes.string,
		AssessmentBriefURL: PropTypes.string,
		AssessmentModuleID: PropTypes.string,
		AssessmentAssessmentTypeID: PropTypes.number,
		AssessmentModuleName: PropTypes.string,
		AssessmenttypeDescription: PropTypes.string,
		AssessmentAssessmenttypeDescription: PropTypes.string,
	}),
};
