import { useState, useEffect } from 'react';
import APIWrapper from '../../utils/API';
import './Notification.scss';

export default function Notification() {
	const [show, setShow] = useState(false);
	const [assessments, setAssessments] = useState([]);
	const API = new APIWrapper();

	// TODO: Fetch only new assessments from last week.
	const getAssessments = async (returnValues = false) => {
		try {
			const response = await API.get('assessments');
			if (response.error) throw new Error('Error');
			setAssessments(response);
			return (returnValues) ? response : setAssessments(response);
		} catch (err) {
			console.log(err);
			return (returnValues) ? [] : setAssessments([]);
		}
	};

	useEffect(() => {
		getAssessments();
	});

	return (
		<>
			<button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => setShow(!show)}>
				<i className="fa fa-bell" style={{ color: 'white' }}></i>
				<span className="badge">
					{assessments.length}
				</span>
			</button>
			<ul className={`dropdown-menu ${show ? 'show' : ''}`} aria-labelledby="dropdownMenuButton1">
				{assessments.map(a => (
					<li key={a.AssessmentID}>
						<a className="dropdown-item" href="#">{a.AssessmentName}</a>
					</li>
				))}
			</ul>
		</>
	);
}
