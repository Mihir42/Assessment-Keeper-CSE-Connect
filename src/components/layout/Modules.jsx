export default function Modules({ modules }) {
	return (
		<div className="card" style={{ minHeight:'80vh' }}>
			<h4 className="card-header" style={{ backgroundColor: 'white' }}>Modules</h4>
			<div className="card-body">
				<nav className="nav flex-column">
					{modules.map(l => (
						<a className="nav-link active" aria-current="page" href="#" key={l}>{l}</a>
					))}
					<a className="nav-link" style={{ textAlign:'center', textDecoration: 'underline' }}>View all</a>
				</nav>
			</div>
		</div>
	);
}

Modules.propTypes = {
	modules: [],
};
