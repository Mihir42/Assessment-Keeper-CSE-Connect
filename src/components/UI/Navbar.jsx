import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
	// Set active state for first item
	const location = useLocation();

	return (
		<nav className="navbar" id="navbar2">
			<div className="container">
				<ul className="nav nav-underline">
					<li className="nav-item">
						<NavLink to="/modules" className={`nav-link ${location.pathname == '/modules' ? 'active' : ''}`} id="title">Home</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/addAssessments" className={`nav-link ${location.pathname == '/addAssessments' ? 'active' : ''}`} id="title">Add Assessments</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/" className={`nav-link ${location.pathname == '/Tasks' ? 'active' : ''}`} id="title">Tasks</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}
