import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Assessment from './components/views/Assessments.jsx';
import './App.scss';

function App() {

	// Get assignmenst

	const userLoggedIn = 'Student';
	return (
		<BrowserRouter>
			<Layout userLoggedIn={userLoggedIn}>
				<Routes>
					<Route path="/assessment" element={<Assessment/>} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
