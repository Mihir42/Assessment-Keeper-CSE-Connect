import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import Modules from './components/views/Modules';
import Login from './components/views/Login';
import './App.scss';
const UserContext = createContext();

function App() {
	const [user, setUser] = useState({});

	return (
		<UserContext.Provider value={user}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login setUser={setUser} />} />
					<Route path="/modules" element={<Modules />} />
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}

export default App;
export { UserContext };
