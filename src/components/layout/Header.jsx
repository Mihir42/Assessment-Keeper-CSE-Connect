import { NavLink } from 'react-router-dom';
import '../../styles/Header.scss';

export default function Header({ student }) {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container">
				<NavLink to="/" className="navbar-brand"><i className="fa fa-calendar"></i> AssessKeeper</NavLink>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					</ul>
					<ul className="navbar-nav d-flex">
						{student.id == null ?
							<li className="navbar-nav">
								<a className="nav-item text-dark nav-link" href="#">Login</a>
							</li>
							:
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<img src="https://placehold.co/32" width="32" height="32" className="rounded-circle" alt="User avatar" /> {student.secondName}, {student.firstName}
								</a>
								<div className="dropdown-menu dropdown-menu-end">
									<a className="dropdown-item text-dark" href="/settings">Settings</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#" id="logout">Logout</a>
								</div>
							</li>
						}
					</ul>
				</div>
			</div>
		</nav>
	);
}

Header.propTypes = {
	student: {
		id: '',
		firstName: '',
		secondName: '',
	},
};
