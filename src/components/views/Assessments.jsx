import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout } from '../layout';
import { Card, DownloadCalenderButton } from '../UI';
import APIWrapper from '../../utils/API';
import { UserContext } from '../../App.jsx';

export default function Assessments() {
	const [assessment, setAssessment] = useState({});
	const API = new APIWrapper();
	const navigate = new useNavigate();
	const location = useLocation();
	const user = useContext(UserContext);

	const fetchAssessment = async () => {
		const response = await API.get(`assessments/${location.pathname.substr(13, location.pathname.length - 1)}`);
		if (response.message == 'Specified endpoint not found') return;
		setAssessment(response[0]);
	};

	useEffect(() => {
		if (user.UserID == undefined) return navigate('/');
		fetchAssessment();
	}, []);
	if (user.UserID == undefined) return null;

	return (
		<Layout>
			<Card title={assessment.AssessmentName}>
				<>
					<p>Description: {assessment.AssessmentAssessmenttypeDescription}</p>
					<p>Module: {assessment.AssessmentModuleName}</p>
					<p>Publish date: {new Date(assessment.AssessmentPublishdate).toLocaleString()}</p>
					<a href={assessment.AssessmentBriefURL}>{assessment.AssessmentBriefURL}</a>
					<DownloadCalenderButton assessment={assessment}/>
				</>
			</Card>
		</Layout>

	);
}
