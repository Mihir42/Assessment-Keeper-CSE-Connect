import { useState } from 'react';
import '../../styles/Modules.scss';

export default function Modules({ modules }) {
	// Set active state for first item
	const [active, setActive] = useState(modules[0]);

	return (
		<div className="card">
			<h4 className="card-header">Modules</h4>
			<div className="card-body">
				<nav className="nav flex-column">
					{modules.map(l => (
						<a className={`nav-link ${active == l ? 'active' : ''}`} id="moduleLink" aria-current="page" href="#" key={l} onClick={() => setActive(l)}>{l}</a>
					))}
					<a className="nav-link" id="viewAll" href="#">View all</a>
				</nav>
			</div>
		</div>
	);
}

Modules.propTypes = {
	modules: [],
};
