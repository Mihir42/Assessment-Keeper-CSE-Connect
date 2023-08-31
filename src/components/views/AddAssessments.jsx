import { useState } from 'react';
import { Layout } from '../layout';
import { Card } from '../UI';
import APIWrapper from '../../utils/API';

const initialAssessment = {
	AssessmentID: 0,
	AssessmentName: null,
	AssessmentPercentage: 0,
	AssessmentPublishDate: null,
	AssessmentSubmissionDate: null,
	AssessmentFeedbackdate: null,
	AssessmentBriefURL: null,
	AssessmentModuleID: 0,
	AssessmentAssessmenttypeID: 0,
	AssessmentModuleName: null,
	AssessmentAssessmenttypeDescription: null,
};

export default function AddAssessments() {
	// Initialisation -----------------------------------------------
	const conformance = {
		html2js : {
			AssessmentID: (value) => (value === 0 ? null : parseInt(value)),
			AssessmentName: (value) => (value === '' ? null : value),
			AssessmentPercentage: (value) => (value === 0 ? null : parseInt(value)),
			AssessmentPublishDate: (value) => (value === '' ? null : value),
			AssessmentSubmissionDate: (value) => (value === '' ? null : value),
			AssessmentFeedbackdate: (value) => (value === '' ? null : value),
			AssessmentBriefURL: (value) => (value === '' ? null : value),
			AssessmentModuleID: (value) => (value === 0 ? null : parseInt(value)),
			AssessmentAssessmenttypeID: (value) => (value === 0 ? null : parseInt(value)),
			AssessmentModuleName: (value) => (value === '' ? null : value),
			AssessmentAssessmenttypeDescription: (value) => (value === '' ? null : value),
		},

		js2html : {
			AssessmentID: (value) => (value === null ? 0 : value),
			AssessmentName: (value) => (value === null ? '' : value),
			AssessmentPercentage: (value) => (value === null ? 0 : value),
			AssessmentPublishDate: (value) => (value === null ? '' : value),
			AssessmentSubmissionDate: (value) => (value === null ? '' : value),
			AssessmentFeedbackdate: (value) => (value === null ? '' : value),
			AssessmentBriefURL: (value) => (value === null ? '' : value),
			AssessmentModuleID: (value) => (value === null ? 0 : value),
			AssessmentAssessmenttypeID: (value) => (value === null ? 0 : value),
			AssessmentModuleName: (value) => (value === null ? '' : value),
			AssessmentAssessmenttypeDescription: (value) => (value === null ? '' : value),
		},
	};
	const api = new APIWrapper();
	const assessmentEndpoint = '/assessments';

	// State --------------------------------------------------------
	const [assessment, setAssessment] = useState(initialAssessment);

	const apiPost = async (endpoint, record) => {
		// Build request object
		const request = {
			method: 'POST',
			body: JSON.stringify(assessment),
			headers: { 'Content-type': 'application/json' },
		};

		// Call the fetch
		const response = await fetch(endpoint, request);
		const result = await response.json();
		return response.status >= 200 && response.status < 300
			? { isSuccess: true }
			: { isSuccess: false, message: result.message };
	};
	// Handlers -----------------------------------------------------
	const handleChange = (event) => {
		const { name, value } = event.target;
		setAssessment({ ...assessment, [name]: conformance.html2js[name](value) });
	};
	const handleSubmit = () => {
		console.log(`Assessment=[${JSON.stringify(assessment)}]`);
	};
	// View ---------------------------------------------------------
	return(
		<div className='addAssessmentForm'>
			<Layout />
			<Card title='Balls'>
				<>
					<label>Assessment ID</label>
					<input type='Number' className='input-field' name='AssessmentID' value={conformance.js2html['AssessmentID'](assessment.AssessmentID)} onChange={handleChange} />
					<label>Assessment Name</label>
					<input type='text' className='input-field' name='AssessmentName' value={conformance.js2html['AssessmentName'](assessment.AssessmentName)} onChange={handleChange} />
					<label>Assessment Percentage</label>
					<input type='Number' className='input-field' name='AssessmentPercentage' value={conformance.js2html['AssessmentPercentage'](assessment.AssessmentPercentage)} onChange={handleChange} />
					<label>Assessment Publish Date</label>
					<input type='text' className='input-field' name='AssessmentPublishDate' value={conformance.js2html['AssessmentPublishDate'](assessment.AssessmentPublishDate)} onChange={handleChange} />
					<label>Assessment Submission Date</label>
					<input type='text' className='input-field' name='AssessmentSubmissionDate' value={conformance.js2html['AssessmentSubmissionDate'](assessment.AssessmentSubmissionDate)} onChange={handleChange} />
					<label>Assessment Feedback Date</label>
					<input type='text' className='input-field' name='AssessmentFeedbackdate' value={conformance.js2html['AssessmentFeedbackdate'](assessment.AssessmentFeedbackdate)} onChange={handleChange} />
					<label>Assessment Brief URL</label>
					<input type='text' className='input-field' name='AssessmentBriefURL' value={conformance.js2html['AssessmentBriefURL'](assessment.AssessmentBriefURL)} onChange={handleChange} />
					<label>Assessment Module ID</label>
					<input type='Number' className='input-field' name='AssessmentModuleID' value={conformance.js2html['AssessmentModuleID'](assessment.AssessmentModuleID)} onChange={handleChange} />
					<label>Assessment Assessment Type ID</label>
					<input type='Number' className='input-field' name='AssessmentAssessmenttypeID' value={conformance.js2html['AssessmentAssessmenttypeID'](assessment.AssessmentAssessmenttypeID)} onChange={handleChange} />
					<label>Assessment Module Name</label>
					<input type='text' className='input-field' name='AssessmentModuleName' value={conformance.js2html['AssessmentModuleName'](assessment.AssessmentModuleName)} onChange={handleChange} />
					<label>Assessment Assessment type description</label>
					<input type='text' className='input-field' name='AssessmentAssessmenttypeDescription' value={conformance.js2html['AssessmentAssessmenttypeDescription'](assessment.AssessmentAssessmenttypeDescription)} onChange={handleChange}/>
					<button className='submitAssessment' type='submit' onClick={handleSubmit}>Submit</button>
				</>
			</Card>
		</div>
	);
};