import { useState } from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
	// Set active state for first item
	const [active, setActive] = useState('Home');

	return (
		<nav className="navbar navbar-expand-lg" id="navbar2">
			<div className="container">
				<ul className="nav nav-underline">
					<li className="nav-item">
						<button className={`nav-link ${active == 'Home' ? 'active' : ''}`} id="title" onClick={() => setActive('Home')}>Home</button>
					</li>
					<li className="nav-item">
						<NavLink to = "/" className= 'nav-link'>Add Assessments</NavLink>
					</li>
					<li className="nav-item">
						<button className={`nav-link ${active == 'Tasks' ? 'active' : ''}`} id="title" onClick={() => setActive('Tasks')}>Tasks</button>
					</li>
				</ul>
			</div>
		</nav>
	);
}
