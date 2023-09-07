import { useState } from 'react';
import { Layout } from '../layout';
import { Card } from '../UI';
import APIWrapper from '../../utils/API';


export default function AddAssessmentCard() {
	// Initialisation -----------------------------------------------
	const defaultPublishDate = new Date().toISOString().slice(0, -1, 0);
	const defaultSubmissionDate = new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().slice(0, -8);
	const defaultFeedbackDate = new Date(new Date().setMonth(new Date().getMonth() + 2)).toISOString().slice(0, -8);
	const testingDate = new Date('2022-10-24T00:00:00.000').toJSON().toString();
	const conformance = {
		html2js : {
			AssessmentID: (value) => (value === 0 ? null : parseInt(value)),
			AssessmentName: (value) => (value === '' ? null : value),
			AssessmentPercentage: (value) => (value === 0 ? null : parseInt(value)),
			AssessmentPublishdate: (value) => (value === '' ? null : value),
			AssessmentSubmissiondate: (value) => (value === '' ? null : value),
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
			AssessmentPublishdate: (value) => (value === null ? '' : value),
			AssessmentSubmissiondate: (value) => (value === null ? '' : value),
			AssessmentFeedbackdate: (value) => (value === null ? '' : value),
			AssessmentBriefURL: (value) => (value === null ? '' : value),
			AssessmentModuleID: (value) => (value === null ? 0 : value),
			AssessmentAssessmenttypeID: (value) => (value === null ? 0 : value),
			AssessmentModuleName: (value) => (value === null ? '' : value),
			AssessmentAssessmenttypeDescription: (value) => (value === null ? '' : value),
		},
	};
	const API = new APIWrapper();
	const apiURL = 'http://softwarehub.uk/unibase/api';
	const assessmentEndpoint = `${apiURL}/assessments`;

	// State --------------------------------------------------------
	const [assessment, setAssessment] = useState({
		AssessmentID: 0,
		AssessmentName: null,
		AssessmentPercentage: 0,
		AssessmentPublishdate: testingDate,
		AssessmentSubmissiondate: defaultSubmissionDate,
		AssessmentFeedbackdate: defaultFeedbackDate,
		AssessmentBriefURL: null,
		AssessmentModuleID: 1,
		AssessmentAssessmenttypeID: 0,
		AssessmentModuleName: null,
		AssessmentAssessmenttypeDescription: null,
	});
	const [modules, setModules] = useState([]);

	const apiPost = async (endpoint, record) => {
		// Build request object
		const request = {
			method: 'POST',
			body: JSON.stringify(record),
			headers: { 'Content-type': 'application/json' },
		};

		// Call the fetch
		const response = await fetch(endpoint, request);
		const result = await response.json();
		return response.status >= 200 && response.status < 300
			? { isSuccess: true }
			: { isSuccess: false, message: result.message };
	};

	(async () => {
		const data = await API.get('/modules');
		setModules(data);
	})();


	// Handlers -----------------------------------------------------
	const handleChange = (event) => {
		const { name, value } = event.target;
		setAssessment({ ...assessment, [name]: conformance.html2js[name](value) });
	};

	const handleSubmit = async () => {
		console.log(`Assessment=[${JSON.stringify(assessment)}]`);

		const result = apiPost(assessmentEndpoint, assessment);

		result.isSuccess
			? console.log('Insert successful')
			: console.log(`Insert not successful: ${(await result).message}`);
	};

	return (
		<>
			<Layout />
			<Card title="Add an Assessment">
				<div className="loginCard">
					<div className="row">
						<div className="col-lg-6">

							<label htmlFor="AssessmentID">Assessment ID</label>
							<input type="Number" className="input-field" id="AssessmentID" name="AssessmentID" value={conformance.js2html['AssessmentID'](assessment.AssessmentID)} onChange={handleChange} />

							<label htmlFor="AssessmentName">Name: </label>
							<input type="text" className="input-field" id="AssessmentName" name="AssessmentName" value={conformance.js2html['AssessmentName'](assessment.AssessmentName)} onChange={handleChange} />

							<label htmlFor="AssessmentPercentage">Percentage</label>
							<input type="Number" className="input-field" id="AssessmentPercentage" name="AssessmentPercentage" value={conformance.js2html['AssessmentPercentage'](assessment.AssessmentPercentage)} onChange={handleChange} />

							<label htmlFor="AssessmentPublishdate">Publish Date:</label>
							<input type="text" className="input-field" id="AssessmentPublishdate" name="AssessmentPublishdate" value={conformance.js2html['AssessmentPublishdate'](assessment.AssessmentPublishdate)} onChange={handleChange} />

							<label htmlFor="AssessmentSubmissiondate">Submission Date:</label>
							<input type="datetime-local" className="input-field" id="AssessmentSubmissiondate" name="AssessmentSubmissiondate" value={conformance.js2html['AssessmentSubmissiondate'](assessment.AssessmentSubmissiondate)} onChange={handleChange} />

							<label htmlFor="AssessmentFeedbackdate">Feedback Date:</label>
							<input type="datetime-local" className="input-field" id="AssessmentFeedbackdate" name="AssessmentFeedbackdate" value={conformance.js2html['AssessmentFeedbackdate'](assessment.AssessmentFeedbackdate)} onChange={handleChange} />
						</div>
						<div className="col-lg-6">
							<label htmlFor="AssessmentBriefURL">Brief URL:</label>
							<input type="text" className="input-field" id="AssessmentBriefURL" name="AssessmentBriefURL" value={conformance.js2html['AssessmentBriefURL'](assessment.AssessmentBriefURL)} onChange={handleChange} />

							<label htmlFor="AssessmentModuleID">Module:</label>
							<select className="input-field" id="AssessmentModuleID" name="AssessmentModuleID" value={conformance.js2html['AssessmentModuleID'](assessment.AssessmentModuleID)} onChange={handleChange}>
								{modules.map(m => (
									<option value={m.ModuleID} key={m.ModuleID}>{m.ModuleName}</option>
								))}
							</select>

							<label htmlFor="AssessmentAssessmenttypeID">Type ID:</label>
							<input type="Number" className="input-field" id="AssessmentAssessmenttypeID" name="AssessmentAssessmenttypeID" value={conformance.js2html['AssessmentAssessmenttypeID'](assessment.AssessmentAssessmenttypeID)} onChange={handleChange} />

							<label htmlFor="AssessmentAssessmenttypeDescription">Description:</label>
							<input type="text" className="input-field" id="AssessmentAssessmenttypeDescription" name="AssessmentAssessmenttypeDescription" value={conformance.js2html['AssessmentAssessmenttypeDescription'](assessment.AssessmentAssessmenttypeDescription)} onChange={handleChange}/>
							&nbsp;
							<button className="btn btn-secondary" type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
						</div>
					</div>
				</div>
			</Card>
		</>
	);
}
