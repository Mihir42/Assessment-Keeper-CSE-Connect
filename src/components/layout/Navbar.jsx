export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg" style={{ borderBottom: '1px solid black', paddingBottom:'0px' }}>
			<div className="container">
				<ul className="nav nav-underline">
					<li className="nav-item">
						<a className="nav-link active" aria-current="page" href="#">Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Assignments</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Tasks</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
