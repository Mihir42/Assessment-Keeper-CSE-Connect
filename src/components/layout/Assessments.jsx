import Card from '../UI/Card';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import APIWrapper from '../../utils/API';
import './Assessments.scss';

export default function Assessments({ moduleID }) {
	const API = new APIWrapper();
	const [studentAssessments, setStudentAssessments] = useState(null);

	// Function for fetching students assessments
	const fetchStudentAssessments = async () => {
		const response = await API.get('assessments');
		setStudentAssessments(response);
	};

	// Fetch student assessments on page load
	useEffect(() => {
		fetchStudentAssessments();
	}, []);

	// Filter based on input
	let moduleAssessments = [];
	if (moduleID == null) {
		moduleAssessments = studentAssessments;
	} else {
		moduleAssessments = studentAssessments.filter(sa => sa.AssessmentModuleName == moduleID);
	}

	return (
		<Card title={'Assessment'}>
			{moduleAssessments == null ?
				<p>No Assessments</p> :
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
			}
		</Card>
	);
}

Assessments.propTypes = {
	moduleID: PropTypes.string,
};
