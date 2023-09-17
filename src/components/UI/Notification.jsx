import { useState, useEffect } from 'react';
import APIWrapper from '../../utils/API';
import Dropdown from './Dropdown.jsx';
import DropdownItem from './DropdownItem.jsx';
import './Notification.scss';

export default function Notification() {
	const [assessments, setAssessments] = useState([]);
	const API = new APIWrapper();

	const getAssessments = async (returnValues = false) => {
		try {
			const response = await API.get('assessments');
			if (response.error) throw new Error('Error');

			// Filter to only show new ones
			const sevenDaysAgo = new Date(Date.now() - 270 * 24 * 60 * 60 * 1000);
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
			<>
				{assessments.length > 0 ?
					assessments.map(a => (
						<DropdownItem assessment={a} key={a.AssessmentID} />
					))
					:
					<li>
						<p className="dropdown-item">No new Assessments.</p>
					</li>
				}
			</>
		</Dropdown>
	);
}
