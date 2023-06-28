import Navbar from './Navbar.jsx';
import Navbarv2 from './Navbar2.jsx';
import Modules from './Modules.jsx';
import Tasks from './Tasks.jsx';

export default function Layout() {
	return (
		<>
			<Navbar />
			<Navbarv2 />
			<div className="container" style={{ paddingTop:'3vh' }}>
				<div className="row">
					<div className="col-lg-4">
						<Modules />
					</div>
					<div className="col-lg-8">
						<Tasks />
					</div>
				</div>
			</div>
		</>
	);
}
