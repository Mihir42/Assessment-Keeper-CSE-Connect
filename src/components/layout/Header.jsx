import { NavLink } from 'react-router-dom';
import './Header.scss';

export default function Header() {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container">
				<NavLink to="/" className="navbar-brand"><i className="fa fa-calendar"></i> AssessKeeper</NavLink>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					</ul>
					<ul className="navbar-nav d-flex">
						<li className="navbar-nav">
							<a className="nav-link" href="#">Switch View</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
