import PropTypes from 'prop-types';
import { Modal, Accordion } from '../UI';
import { useState } from 'react';
import APIWrapper from '../../utils/API';

export default function LeaderAssessmentAccordion({ id, assessment }) {
	const [active, setActive] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [editValues, setEditValues] = useState({});
	const validDateTime = (new Date(new Date(assessment.AssessmentPublishdate).getTime() - new Date(assessment.AssessmentPublishdate).getTimezoneOffset() * 60000).toISOString()).slice(0, -1);
	const API = new APIWrapper();

	const handleChange = (event) => {
		const { name, value } = event.target;
		if (name == 'AssessmentPublishdate') {
			setEditValues({ ...editValues, [name]: value.split('T')[0] });
		} else {
			setEditValues({ ...editValues, [name]: value });
		}
	};

	const handleSubmit = async (e) => {
		e?.preventDefault();
		try {
			const data = await API.put(`assessments/${assessment.AssessmentID}`, editValues);
			alert(`Successfully updated: ${assessment.AssessmentName}`);
		} catch (err) {
			alert(`Failed to update: ${assessment.AssessmentName}`);
		}
		setShowModal(false);
	};


	return (
		<>
			<Modal id={id} title={`Edit: ${assessment.AssessmentName}`} show={showModal} setShowModal={setShowModal}>
				<form onSubmit={(e) => handleSubmit(e)}>
					<label>Name:</label>
					<input type="text" className="input-field" name="AssessmentName" defaultValue={assessment.AssessmentName} onChange={handleChange} />
					<label>Publish Date:</label>
					<input type="datetime-local" className="input-field" name="AssessmentPublishdate" defaultValue={validDateTime} onChange={handleChange} />
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
						Edit
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
		AssessmentModuleID: PropTypes.number,
		AssessmentAssessmentTypeID: PropTypes.number,
		AssessmentModuleName: PropTypes.string,
		AssessmenttypeDescription: PropTypes.string,
		AssessmentAssessmenttypeDescription: PropTypes.string,
	}),
};
