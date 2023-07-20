import Layout from '../UI/Layout.jsx';
import { Modules, Assessments } from '../layout';
import { useState } from 'react';


export default function Home() {
	const [activeModuleId, setActiveModuleId] = useState(null);

	return (
		<Layout>
			<div className="row">
				<div className="col-lg-4">
					<Modules updateActiveModuleId={setActiveModuleId} />
				</div>
				<div className="col-lg-8">
					<Assessments moduleID={activeModuleId}/>
				</div>
			</div>
		</Layout>
	);
}
