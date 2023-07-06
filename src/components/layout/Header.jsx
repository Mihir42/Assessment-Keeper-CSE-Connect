import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
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
							<a className="nav-link" href="#">
								<img src="https://placehold.co/32" width="32" height="32" className="rounded-circle" alt="User avatar" /> {student.firstName} {student.secondName}
							</a>
						}
					</ul>
				</div>
			</div>
		</nav>
	);
}

Header.propTypes = {
	student: PropTypes.shape({
		id: PropTypes.number,
		firstName: PropTypes.string,
		secondName: PropTypes.string,
	}),
};
