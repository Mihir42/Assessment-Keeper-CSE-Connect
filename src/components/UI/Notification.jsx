import { useState, useEffect } from 'react';
import APIWrapper from '../../utils/API';
import Dropdown from './Dropdown.jsx';
import { NavLink } from 'react-router-dom';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import './Notification.scss';
TimeAgo.addDefaultLocale(en);

export default function Notification() {
	const timeAgo = new TimeAgo('en-US');
	const [assessments, setAssessments] = useState([]);
	const API = new APIWrapper();

	// TODO: Fetch only new assessments from last week.
	const getAssessments = async (returnValues = false) => {
		try {
			const response = await API.get('assessments');
			if (response.error) throw new Error('Error');

			// Filter to only show new ones
			const sevenDaysAgo = new Date(Date.now() - 300 * 24 * 60 * 60 * 1000);
			const newAssessments = response.filter(a => new Date(a.AssessmentPublishdate) > sevenDaysAgo);
			setAssessments(newAssessments);
			return (returnValues) ? newAssessments : setAssessments(newAssessments);
		} catch (err) {
			console.log(err);
			return (returnValues) ? [] : setAssessments([]);
		}
	};

	useEffect(() => {
		getAssessments();
	}, []);

	return (
		<Dropdown button={<>
			<i className="fa fa-bell" style={{ color: 'white' }}></i>
			<span className="badge">
				{assessments.length}
			</span>
		</>
		}>
			{assessments.length > 0 ?
				assessments.map(a => (
					<li key={a.AssessmentID}>
						<NavLink className="dropdown-item" to={`/assessments/${a.AssessmentID}`}>
							{a.AssessmentName}
						</NavLink>
						<span className="timeAgo">
						({timeAgo.format(new Date(a.AssessmentPublishdate))})
						</span>
					</li>
				))
				:
				<li>
					<p className="dropdown-item">No new Assessments.</p>
				</li>
			}
		</Dropdown>
	);
}
