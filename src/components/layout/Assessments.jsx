import Card from '../UI/Card';
import PropTypes from 'prop-types';
import {useState, useEffect } from 'react';
import './Assessments.scss';

export default function Assessments({ moduleID }) {
	// console.log(moduleID);

	const apiURL = 'http://softwarehub.uk/unibase/api/';
	const assessmentEndPoint = `${apiURL}/assessments`;

	const[studentAssessments, setStudentAssessments] = useState(null);

	const apiGet = async (endpoint) => {
		const response = await fetch(endpoint);
		const result = await response.json();
		setStudentAssessments(result);

	};

	useEffect(() => {
		apiGet(assessmentEndPoint);
	}, [assessmentEndPoint]);

	// I am sorry, I got really lazy here
	let moduleAssessments = null;

	if(moduleID !== null && studentAssessments !== null) {
		moduleAssessments = studentAssessments.filter(sa => sa.AssessmentModuleName == moduleID);
	}

	else if(moduleID === null && studentAssessments !== null) {
		moduleAssessments = studentAssessments.filter(sa => sa.AssessmentModuleName == 'CI4250 Computing Fundamentals');

	}

	if(moduleID > 0) {
		moduleAssessments = studentAssessments.filter(sa => sa.AssessmentID > 0);
	}

	return (
		moduleAssessments === null
			? <p>No Assessments</p>
			: <Card title={'Assessment'}>
				<>
					{moduleAssessments.map(task => (
						<div className="accordion" id="accordionExample" key={task.AssessmentID}>
							<div className="accordion-item">
								<h2 className="accordion-header">
									<button className="accordion-button row collapsed" type="button"
										data-bs-toggle="collapse" data-bs-target={`#collapse_${moduleAssessments.indexOf(task)}`} aria-expanded="false" aria-controls="collapseOne">
										<div className="col-sm-8">{task.AssessmentName}</div>
										<div className="col-sm-3">{new Date(task.AssessmentPublishdate).toLocaleDateString('en-GB')}</div>
									</button>
								</h2>
								<div id={`collapse_${moduleAssessments.indexOf(task)}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
									<div className="accordion-body">
										<p>{task.AssessmenttypeDescription}</p>
										<p>Page URL: <a href={task.AssessmentBriefURL}>{task.AssessmentBriefURL}</a></p>
									</div>
								</div>
							</div>
						</div>
					))}
				</>
			</Card>
	);
}

Assessments.propTypes = {
	tasks: PropTypes.array,
};
