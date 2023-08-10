import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.scss';

export default function Header({ user }) {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container">
				<NavLink to="/studentView" className="navbar-brand"><i className="fa fa-calendar"></i> AssessKeeper</NavLink>
				{user.UserID == undefined ?
					<li className="navbar-nav">
						<a className="module-viewLink" href="/">Module Leader login</a>
					</li>
					:
					<li className="navbar-nav">
						<a className="module-viewLink" href="/">
							<img src={user.UserImageURL} width={25} height={25} className="rounded-circle" alt="User avatar" />{user.UserLastname}, {user.UserFirstname}
						</a>
					</li>
				}
			</div>
		</nav>
	);
}

Header.propTypes = {
	children: PropTypes.element,
	user: PropTypes.object,
};
