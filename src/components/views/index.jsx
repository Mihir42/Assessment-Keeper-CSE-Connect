import Layout from '../UI/Layout.jsx';
import { Modules, Assessments } from '../layout';
import { useState, useEffect, useMemo } from 'react';
import { assignments } from '../../assets/assignments.json';

export default function Home() {
	const modules = [...new Set(assignments.map(i => i.AssessmentModuleName))];
	const [tasks, setTasks] = useState(assignments.filter(as => as.AssessmentModuleName == modules[0]));

	// state

	const apiURL = 'http://softwarehub.uk/unibase/api';
	const modulesEndpoint = `${apiURL}/modules/users/276`;

	// state react watched for changes with useState hook
	const[studentMods, setStudentMods] = useState(null);

	// async methods when called queue a job and return empty
	// await aysnc is used to combat this
	const apiGet = async (endpoint) => {
		const response = await fetch(endpoint);
		const result = await response.json(); // JSON to js object 

		const onlyModules = result.map((mod) => // get module name from object 
			mod['ModuleName'],
		);

		setStudentMods(onlyModules);
	};

	// After content is rendered, run apiGet, runs after first render and every update
	// This could be why the first render returns null
	useEffect(() => {
		apiGet(modulesEndpoint);
	}, [modulesEndpoint]);

	console.log(studentMods);

	return (
		<Layout>
			<div className="row">
				<div className="col-lg-4">
					<Modules modules={modules} updateTasks={setTasks} />
				</div>
				<div className="col-lg-8">
					<Assessments tasks={tasks}/>
				</div>
			</div>
		</Layout>
	);
}
