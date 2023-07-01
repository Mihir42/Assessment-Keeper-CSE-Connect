import { useState } from 'react';
import '../../styles/Navbar.scss';

export default function Navbar() {
	// Set active state for first item
	const [active, setActive] = useState('Home');

	return (
		<nav className="navbar navbar-expand-lg" id="navbar2">
			<div className="container">
				<ul className="nav nav-underline">
					<li className="nav-item">
						<button className={`nav-link ${active == 'Home' ? 'active' : ''}`} aria-current="page" href="#" id="title" onClick={() => setActive('Home')}>Home</button>
					</li>
					<li className="nav-item">
						<button className={`nav-link ${active == 'Assignments' ? 'active' : ''}`} href="#" id="title" onClick={() => setActive('Assignments')}>Assignments</button>
					</li>
					<li className="nav-item">
						<button className={`nav-link ${active == 'Tasks' ? 'active' : ''}`} href="#" id="title" onClick={() => setActive('Tasks')}>Tasks</button>
					</li>
				</ul>
			</div>
		</nav>
	);
}
