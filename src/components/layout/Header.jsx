import { NavLink } from 'react-router-dom';

import './Header.scss';

export default function Header() {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container">
				<NavLink to="/studentView" className="navbar-brand"><i className="fa fa-calendar"></i> AssessKeeper</NavLink>
				<li className="navbar-nav">
					<a className="module-viewLink" href="/">Module Leader login</a>
				</li>
			</div>
		</nav>
	);
}
