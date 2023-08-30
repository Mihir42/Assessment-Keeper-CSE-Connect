import { useState } from 'react';
import { Layout } from '../layout';
import { Card } from '../UI';

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
	// State --------------------------------------------------------
	const [assessment, setAssessment] = useState(initialAssessment);
	// Handlers -----------------------------------------------------
	const handleChange = (event) => {
		const { name, value } = event.target;
		setAssessment({ ...assessment, [name]: value });
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
					<input type='text' className='input-field' name='AssessmentID' value={assessment.AssessmentID} onChange={handleChange} />
					<label>Assessment Name</label>
					<input type='text' className='input-field' name='AssessmentName' value={assessment.AssessmentName == null ? '' : assessment.AssessmentName} onChange={handleChange} />
					<label>Assessment Percentage</label>
					<input type='text' className='input-field' name='AssessmentPercentage' value={assessment.AssessmentPercentage} onChange={handleChange} />
					<label>Assessment Publish Date</label>
					<input type='text' className='input-field' name='AssessmentPublishDate' value={assessment.AssessmentPublishDate == null ? '' : assessment.AssessmentPublishDate} onChange={handleChange} />
					<label>Assessment Submission Date</label>
					<input type='text' className='input-field' name='AssessmentSubmissionDate' value={assessment.AssessmentSubmissionDate == null ? '' : assessment.AssessmentSubmissionDate} onChange={handleChange} />
					<label>Assessment Feedback Date</label>
					<input type='text' className='input-field' name='AssessmentFeedbackdate' value={assessment.AssessmentFeedbackdate == null ? '' : assessment.AssessmentFeedbackdate} onChange={handleChange} />
					<label>Assessment Brief URL</label>
					<input type='text' className='input-field' name='AssessmentBriefURL' value={assessment.AssessmentBriefURL == null ? '' : assessment.AssessmentBriefURL} onChange={handleChange} />
					<label>Assessment Module ID</label>
					<input type='text' className='input-field' name='AssessmentModuleID' value={assessment.AssessmentModuleID} onChange={handleChange} />
					<label>Assessment Assessment Type ID</label>
					<input type='text' className='input-field' name='AssessmentAssessmenttypeID' value={assessment.AssessmentAssessmenttypeID} onChange={handleChange} />
					<label>Assessment Module Name</label>
					<input type='text' className='input-field' name='AssessmentModuleName' value={assessment.AssessmentModuleName == null ? '' : assessment.AssessmentModuleName} onChange={handleChange} />
					<label>Assessment Assessment type description</label>
					<input type='text' className='input-field' name='AssessmentAssessmenttypeDescription' value={assessment.AssessmentAssessmenttypeDescription == null ? '' : assessment.AssessmentAssessmenttypeDescription} onChange={handleChange}/>
					<button className='submitAssessment' type='submit' onClick={handleSubmit}>Submit</button>
				</>
			</Card>
		</div>
	);
};