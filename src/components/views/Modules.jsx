import Layout from '../UI/Layout.jsx';
import { Modules, Assessments } from '../layout/index.js';
import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App.jsx';

export default function ModuleLeaderDashboard() {
	const user = useContext(UserContext);

	// State ---------------------------------------
	const [activeModuleId, setActiveModuleId] = useState(0);

	// Initialisation ------------------------------
	const navigate = new useNavigate();
	const moduleEndpoint = `modules/${user.UserUsertypeName == 'Student' ? 'users' : 'leader'}/${user.UserID}`;

	// Redirect the user if no UserID is present
	useEffect(() => {
		if (user.UserID == undefined) return navigate('/');
	});
	if (user.UserID == undefined) return null;

	// View ----------------------------------------
	return (
		<Layout>
			<div className="row">
				<div className="col-lg-4">
					<Modules activeModuleId={activeModuleId} setActiveModuleId={setActiveModuleId} moduleEndpoint={moduleEndpoint}/>
				</div>
				<div className="col-lg-8">
					<Assessments activeModuleId={activeModuleId} isModuleLeader={user.UserUsertypeName !== 'Student'} />
				</div>
			</div>
		</Layout>
	);
}

ModuleLeaderDashboard.propTypes = {
	user: PropTypes.object,
};
