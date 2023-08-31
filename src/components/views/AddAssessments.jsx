import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddAssessmentCard } from '../Entity';
import { UserContext } from '../../App.jsx';


export default function AddAssessments() {
	const user = useContext(UserContext);
	const navigate = new useNavigate();

	// Redirect the user if no UserID is present
	useEffect(() => {
		if (user.UserID == undefined) return navigate('/');
	});
	if (user.UserID == undefined) return null;

	// View ---------------------------------------------------------
	return (
		<AddAssessmentCard />
	);
}
