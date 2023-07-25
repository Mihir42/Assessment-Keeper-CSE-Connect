import { NavLink} from 'react-router-dom';
import ModuleLeader from '../views/ModuleLeader.jsx';

import './Header.scss';

export default function Header() {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container">
				<NavLink to="/" className="navbar-brand"><i className="fa fa-calendar"></i> AssessKeeper</NavLink>
				<li className="navbar-nav">
					<a className="nav-link" href="/moduleView">Module Leader View</a>
				</li>
			</div>
		</nav>
	);
}
