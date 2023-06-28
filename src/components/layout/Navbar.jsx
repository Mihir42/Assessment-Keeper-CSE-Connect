import { NavLink } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#ab1516', color:'white' }}>
			<div className="container">
				<NavLink to="/" className="navbar-brand">AssessKeeper <i className="fa fa-calendar"></i></NavLink>
				<a className="navbar-brand" href="#"></a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					</ul>
					<ul className="navbar-nav d-flex">
						<li className="nav-item">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<img src="https://placehold.co/32" width="32" height="32" className="rounded-circle" alt="User avatar" /> k2146422
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
