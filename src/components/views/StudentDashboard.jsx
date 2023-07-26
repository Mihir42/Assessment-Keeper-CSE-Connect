import Layout from '../UI/Layout.jsx';
import { Modules, Assessments } from '../layout/index.js';
import { useState } from 'react';

export default function StudentDashboard() {
	// Initialisation ------------------------------
	const loggedInUserID = 276;
	const loggedInUserType = 2;
	const moduleEndpoint = `modules/users/${loggedInUserID}`;

	// State ---------------------------------------
	const [activeModuleId, setActiveModuleId] = useState(0);

	// Handlers ------------------------------------

	// View ----------------------------------------
	return (
		<Layout>
			<div className="row">
				<div className="col-lg-4">
					<Modules activeModuleId={activeModuleId} setActiveModuleId={setActiveModuleId} moduleEndpoint={moduleEndpoint}/>
				</div>
				<div className="col-lg-8">
					<Assessments activeModuleId={activeModuleId} />
				</div>
			</div>
		</Layout>
	);
}
