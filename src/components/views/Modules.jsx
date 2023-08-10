import Layout from '../UI/Layout.jsx';
import { Modules, Assessments } from '../layout/index.js';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function ModuleLeaderDashboard({ user }) {
	// Initialisation ------------------------------
	const moduleEndpoint = `modules/users/${user.UserID}`;

	// State ---------------------------------------
	const [activeModuleId, setActiveModuleId] = useState(0);

	// View ----------------------------------------
	return (
		<Layout user={user}>
			<div className="row">
				<div className="col-lg-4">
					<Modules activeModuleId={activeModuleId} setActiveModuleId={setActiveModuleId} moduleEndpoint={moduleEndpoint}/>
				</div>
				<div className="col-lg-8">
					<Assessments activeModuleId={activeModuleId} isModuleLeader={user.UserUsertypeName == 'student'} />
				</div>
			</div>
		</Layout>
	);
}

ModuleLeaderDashboard.propTypes = {
	user: PropTypes.object,
};
