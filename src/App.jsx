import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout, Assessment } from './components/views';
import './App.scss';

function App() {

	// Get assignmenst
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Layout/>} />
					<Route path="/assessment" element={<Assessment/>} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
