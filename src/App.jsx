import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './components/views';
import Assessments from './components/views/Assessments';
import './App.scss';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Index/>} />
				<Route path="/assessments" element={<Assessments />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
