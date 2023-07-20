import Card from '../UI/Card';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import APIWrapper from '../../utils/API';
import './Modules.scss';

export default function Modules({ updateModuleCode }) {
	const API = new APIWrapper();
	const [active, setActive] = useState();
	const [studentModules, setStudentModules] = useState(null);

	const apiGet = async () => {
		try {
			const response = await API.get('modules/users/276');
			if (response.error) throw new Error('Error');

			const assessmentModules = response.map((mod) =>
				mod['ModuleCode'] + ' ' + mod['ModuleName'],
			);

			setStudentModules(assessmentModules);
		} catch (err) {
			console.log(err);
			setStudentModules([]);
		}
	};

	useEffect(() => {
		apiGet();
	}, []);


	return (
		<Card title={'Modules'}>
			{studentModules === null
				? <p>Loading Modules</p>
				:	<nav className="nav flex-column">
					{studentModules.map(module => (
						<button className={`nav-link ${active == module ? 'active' : ''}`}
							id="moduleLink" key={module}
							onClick={() => {
								setActive(module);
								const assessmentCode = module;
								updateModuleCode(assessmentCode);
							}}
							style={{ margin: 0 }}
						>{module}</button>
					))}
					<button className="nav-link" id="viewAll" onClick={() => {
						setActive('all');
						updateModuleCode('1');
					}}>View all</button>
				</nav>

			}
		</Card>
	);
}

Modules.propTypes = {
	updateModuleCode: PropTypes.func,
};
