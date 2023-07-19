import Card from '../UI/Card';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import './Modules.scss';
import { assignments } from '../../assets/assignments.json';

export default function Modules({ modules, updateTasks }) {
	// Set active state for first item
	const [active, setActive] = useState();

	const apiURL = 'http://softwarehub.uk/unibase/api/';
	const moduleEndPoints = `${apiURL}/modules/users/276`;

	const[studentModules, setStudentModules] = useState(null);

	const apiGet = async (endpoint) => {
		const response = await fetch(endpoint);
		const result = await response.json();

		const assessmentModules = result.map((mod) =>
			mod['ModuleCode'] + ' ' + mod['ModuleName'],
		);

		setStudentModules(assessmentModules);
	};

	useEffect(() => {
		apiGet(moduleEndPoints);
	}, [moduleEndPoints]);


	return (
		studentModules === null
			? <p>Loading Modules</p>
			: 	<Card title={'Modules'}>
				<nav className="nav flex-column">
					{studentModules.map(module => (
						<button className={`nav-link ${active == module ? 'active' : ''}`}
							id="moduleLink" key={module}
							onClick={() => {
								setActive(module);
								updateTasks(assignments.filter(c => c.AssessmentModuleName == module));
							}}
							style={{ margin: 0 }}
						>{module}</button>
					))}
					<button className="nav-link" id="viewAll" onClick={() => {
						setActive('all');
						updateTasks(assignments);
					}}>View all</button>
				</nav>
			</Card>
	);
}

Modules.propTypes = {
	modules: PropTypes.arrayOf(PropTypes.string),
	updateTasks: PropTypes.func,
	newModules: PropTypes.arrayOf(PropTypes.object),
};
