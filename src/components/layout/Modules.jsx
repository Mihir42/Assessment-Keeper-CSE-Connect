export default function Navbar() {
	return (
		<div className="card" style={{ minHeight:'80vh' }}>
			<p className="card-header">Modules</p>
			<div className="card-body">
				<ul className="nav flex-column">
					<li className="nav-item">
						<a className="nav-link active" aria-current="page" href="#">Active</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Link</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Link</a>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled">Disabled</a>
					</li>
					<a className="nav-link disabled" style={{ textAlign:'center' }}>View all</a>
				</ul>
			</div>
		</div>

	);
}
