import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import Modules from './components/views/Modules';
import Login from './components/views/Login';
import './App.scss';

function App() {
	const UserContext = createContext();
	const [user, setUser] = useState({});

	return (
		<UserContext.Provider value={user}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login user={user} setUser={setUser} />} />
					<Route path="/modules" element={<Modules user={user} />} />
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}

export default App;
