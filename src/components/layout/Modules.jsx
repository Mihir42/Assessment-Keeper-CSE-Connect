import Card from '../UI/Card';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import APIWrapper from '../../utils/API';
import './Modules.scss';

export default function Modules({ activeModuleId, setActiveModuleId, moduleEndpoint }) {
	// Initialisation ------------------------------
	const API = new APIWrapper();

	// State ---------------------------------------
	const [studentModules, setStudentModules] = useState(null);

	const getModules = async (endpoint) => {
		try {
			const response = await API.get(endpoint);
			if (response.error) throw new Error('Error');
			setStudentModules(response);
		} catch (err) {
			console.log(err);
			setStudentModules([]);
		}
	};


	useEffect(() => {
		getModules(moduleEndpoint);
	}, [moduleEndpoint]);


	// Handlers ------------------------------------
	// View ----------------------------------------
	return (
		<Card title={'Modules'}>
			{studentModules === null
				? <p>Loading Modules</p>
				:	<nav className="nav flex-column">
					{studentModules.map(module => (
						<button
							className={`nav-link ${ module.ModuleID === activeModuleId ? 'active' : ''}`}
							id="moduleLink"
							key={module.ModuleID}
							onClick={() => setActiveModuleId(module.ModuleID) }
							style={{ margin: 0 }}
						>{`${module.ModuleCode} ${module.ModuleName}`}</button>
					))}
					<button className="nav-link" id="viewAll" onClick={() => setActiveModuleId(0) }>View all</button>
				</nav>

			}
		</Card>
	);
}


Modules.propTypes = {
	activeModuleId: PropTypes.number,
	setActiveModuleId: PropTypes.func,
	moduleEndpoint: PropTypes.string,
};
