import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentDashboard from './components/views/StudentDashboard';
import Assessments from './components/views/Assessments';
import ModuleLeaderDashboard from './components/views/ModuleLeaderDashboard';
import LoginCard from './components/views/LoginCard.jsx';
import './App.scss';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginCard />}/>
				<Route path="/studentView" element={<StudentDashboard/>} />
				<Route path="/assessments" element={<Assessments />} />
				<Route path="/moduleView" element={<ModuleLeaderDashboard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
