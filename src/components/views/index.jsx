import Layout from '../UI/Layout.jsx';
import { Modules, Assessments } from '../layout';
import { useState, useEffect, useMemo } from 'react';
import { assignments } from '../../assets/assignments.json';

export default function Home() {
	const modules = [...new Set(assignments.map(i => i.AssessmentModuleName))];
	const [tasks, setTasks] = useState(assignments.filter(as => as.AssessmentModuleName == modules[0]));
	const [moduleCodeNumber, setModuleCodeNumber] = useState(null);


	return (
		<Layout>
			<div className="row">
				<div className="col-lg-4">
					<Modules modules={modules} updateTasks={setTasks} updateModuleCode = {setModuleCodeNumber} />
				</div>
				<div className="col-lg-8">
					<Assessments tasks={tasks} moduleID={moduleCodeNumber}/>
				</div>
			</div>
		</Layout>
	);
}