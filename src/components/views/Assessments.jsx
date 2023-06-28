import { useState } from 'react';
import { CardContainer, Card } from '../UI/Card.jsx';
// import API from '../../utils/API';
import './Assessment.scss';


function Assessment() {
	// Creating list of objects storing assessments details
	const assessmentsList = [
		{
			AssessmentTitle: 'Assessment 1',
			AssessmentModule: 'Module 1',
			AssessmentDueDate: '01/01/2023',
		},
		{
			AssessmentTitle: 'Assessment 2',
			AssessmentModule: 'Module 2',
			AssessmentDueDate: '01/01/2023',
		},
		{
			AssessmentTitle: 'Assessment 3',
			AssessmentModule: 'Module 3',
			AssessmentDueDate: '01/01/2023',
		},
		{
			AssessmentTitle: 'Assessment 4',
			AssessmentModule: 'Module 4',
			AssessmentDueDate: '01/01/2023',
		},
		{
			AssessmentTitle: 'Assessment 3',
			AssessmentModule: 'Module 3',
			AssessmentDueDate: '01/01/2023',
		},
		{
			AssessmentTitle: 'Assessment 5',
			AssessmentModule: 'Module 5',
			AssessmentDueDate: '01/01/2023',
		}];

	// fetchModules();


	const [assessments, setAssessments] = useState(assessmentsList);

	function sortByModule() {
		// Temporary function made until access to backend has been fixed
		const list = [...assessments];
		list.sort((a, b) => a.AssessmentModule.localeCompare(b.AssessmentModule));
		setAssessments(list);
	}

	return (
		<>
			<h1>Assessments</h1>
			<button className="filterBtn" onClick={sortByModule}>Filter</button>
			<CardContainer>
				{
					assessments.map((assessment)=>{
						return(
							<div className = "assessmentCard" key = {assessment.AssessmentModule}>
								<Card>
									<p>{assessment.AssessmentTitle}</p>
									<p>Due date: {assessment.AssessmentDueDate}</p>
								</Card>
							</div>
						);
					})
				}
			</CardContainer>
		</>
	);
}

export default Assessment;
