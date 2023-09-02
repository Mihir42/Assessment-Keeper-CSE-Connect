import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App.jsx';
import Notification from './Notification';
import './Header.scss';

export default function Header() {
	const user = useContext(UserContext);

	return (
		<nav className="navbar">
			<div className="container">
				<NavLink to="/modules" className="navbar-brand"><i className="fa fa-calendar"></i> Assessment Keeper</NavLink>
				{user.UserID == undefined ?
					<ul className="navbar-nav">
						<NavLink className="module-viewLink" href="/">Login</NavLink>
					</ul>
					:
					<ul className="navbar-nav">
						<Notification />
						<NavLink className="module-viewLink" href="/">
							<img src={user.UserImageURL} width={25} height={25} className="rounded-circle" alt="User avatar" />{user.UserLastname}, {user.UserFirstname}
						</NavLink>
					</ul>
				}
			</div>
		</nav>
	);
}
