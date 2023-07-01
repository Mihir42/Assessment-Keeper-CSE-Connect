import Card from '../UI/Card';
import PropTypes from 'prop-types';
import { useState } from 'react';
import '../../styles/Modules.scss';

export default function Modules({ modules }) {
	// Set active state for first item
	const [active, setActive] = useState(modules[0]);

	return (
		<Card title={'Modules'}>
			<nav className="nav flex-column">
				{modules.map(l => (
					<button className={`nav-link ${active == l ? 'active' : ''}`} id="moduleLink" aria-current="page" href="#" key={l} onClick={() => setActive(l)}>{l}</button>
				))}
				<a className="nav-link" id="viewAll" href="#">View all</a>
			</nav>
		</Card>
	);
}

Modules.propTypes = {
	modules: PropTypes.arrayOf(PropTypes.string),
};
