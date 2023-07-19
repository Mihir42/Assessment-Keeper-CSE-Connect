import Layout from '../UI/Layout.jsx';
import { Modules, Assessments } from '../layout';
import { useState } from 'react';


export default function Home() {
	const [moduleCodeNumber, setModuleCodeNumber] = useState(null);

	return (
		<Layout>
			<div className="row">
				<div className="col-lg-4">
					<Modules updateModuleCode = {setModuleCodeNumber} />
				</div>
				<div className="col-lg-8">
					<Assessments moduleID={moduleCodeNumber}/>
				</div>
			</div>
		</Layout>
	);
}
