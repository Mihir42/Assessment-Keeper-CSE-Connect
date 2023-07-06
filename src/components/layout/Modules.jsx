import Card from '../UI/Card';
import PropTypes from 'prop-types';
import { useState } from 'react';
import '../../styles/Modules.scss';
import { assignments } from '../../assets/assignments.json';

export default function Modules({ modules, updateTasks }) {
	// Set active state for first item
	const [active, setActive] = useState(modules[0]);

	return (
		<Card title={'Modules'}>
			<nav className="nav flex-column">
				{modules.map(module => (
					<button className={`nav-link ${active == module ? 'active' : ''}`}
						id="moduleLink" key={module}
						onClick={() => {
							setActive(module);
							updateTasks(assignments.filter(c => c.AssessmentModuleName == module));
						}}
						style={{ margin: 0 }}
					>{module}</button>
				))}
				<button className="nav-link" id="viewAll" onClick={() => updateTasks(assignments)}>View all</button>
			</nav>
		</Card>
	);
}

Modules.propTypes = {
	modules: PropTypes.arrayOf(PropTypes.string),
	updateTasks: PropTypes.func,
};
