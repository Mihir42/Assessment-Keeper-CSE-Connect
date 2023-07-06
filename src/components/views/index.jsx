import Layout from '../UI/Layout.jsx';
import { Modules, Tasks } from '../layout';
import { useState } from 'react';
import { assignments } from '../../assets/assignments.json';

export default function Home() {
	const modules = [...new Set(assignments.map(i => i.AssessmentModuleName))];
	const [tasks, setTasks] = useState(assignments.filter(as => as.AssessmentModuleName == modules[0]));

	return (
		<Layout>
			<div className="row">
				<div className="col-lg-4">
					<Modules modules={modules} updateTasks={setTasks} />
				</div>
				<div className="col-lg-8">
					<Tasks tasks={tasks}/>
				</div>
			</div>
		</Layout>
	);
}
