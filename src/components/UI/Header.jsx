import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App.jsx';
import './Header.scss';

export default function Header() {
	const user = useContext(UserContext);

	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container">
				<NavLink to="/modules" className="navbar-brand"><i className="fa fa-calendar"></i> Assessment Keeper</NavLink>
				{user.UserID == undefined ?
					<li className="navbar-nav">
						<NavLink className="module-viewLink" href="/">Login</NavLink>
					</li>
					:
					<li className="navbar-nav">
						<NavLink className="module-viewLink" href="/">
							<img src={user.UserImageURL} width={25} height={25} className="rounded-circle" alt="User avatar" />{user.UserLastname}, {user.UserFirstname}
						</NavLink>
					</li>
				}
			</div>
		</nav>
	);
}
