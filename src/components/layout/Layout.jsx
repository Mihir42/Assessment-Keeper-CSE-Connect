import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Modules from './Modules.jsx';
import Tasks from './Tasks.jsx';

export default function Layout() {
	return (
		<>
			<Header student={{ id: '1', firstName: 'Ben', secondName: 'F' }}/>
			<Navbar />
			<div className="container" style={{ paddingTop:'3vh' }}>
				<div className="row">
					<div className="col-lg-4">
						<Modules modules={['Programming III', 'Advanced Database', 'Mobile App Development', 'Professional Environments 3', 'Computing Systems', 'FYP Computer Science']}/>
					</div>
					<div className="col-lg-8">
						<Tasks tasks={[{ task: 1, name: 'Code', description: 'Do some coding.', dueDate: new Date().toLocaleString('en-US') }]}/>
					</div>
				</div>
			</div>
		</>
	);
}
