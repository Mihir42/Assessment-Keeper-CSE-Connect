import { NavLink } from 'react-router-dom';
import './Header.scss';

export default function Header() {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container">
				<NavLink to="/" className="navbar-brand"><i className="fa fa-calendar"></i> AssessKeeper</NavLink>
				<li className="navbar-nav">
					<a className="nav-link" href="#">Switch View</a>
				</li>
			</div>
		</nav>
	);
}
