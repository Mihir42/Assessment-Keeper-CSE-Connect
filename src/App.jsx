import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './components/views';
import './App.scss';

function App() {
	// Get assignments
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Index/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
