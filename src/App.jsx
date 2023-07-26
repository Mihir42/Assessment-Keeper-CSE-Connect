import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentDashboard from './components/views/StudentDashboard';
import Assessments from './components/views/Assessments';
import ModuleLeaderDashboard from './components/views/ModuleLeaderDashboard';
import './App.scss';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<StudentDashboard/>} />
				<Route path="/assessments" element={<Assessments />} />
				<Route path="/moduleView" element={<ModuleLeaderDashboard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
