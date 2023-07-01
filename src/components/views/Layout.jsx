import { Header, Navbar, Modules, Tasks } from '../layout';
import '../../styles/Layout.scss';

export default function Layout() {
	return (
		<>
			<Header student={{ id: 1, firstName: 'Ben', secondName: 'F' }}/>
			<Navbar />
			<div className="container" id="container">
				<div className="row">
					<div className="col-lg-4">
						<Modules modules={['Programming III', 'Advanced Database', 'Mobile App Development', 'Professional Environments 3', 'Computing Systems', 'FYP Computer Science']}/>
					</div>
					<div className="col-lg-8">
						<Tasks tasks={[{ task: 1, name: 'Code', description: 'Do some coding.', dueDate: new Date().toLocaleString('en-GB') },
							{ task: 2, name: 'Code v2', description: 'Do some more coding.', dueDate: new Date().toLocaleString('en-GB') }]}/>
					</div>
				</div>
			</div>
		</>
	);
}
