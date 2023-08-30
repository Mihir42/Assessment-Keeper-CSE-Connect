import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useState } from 'react';
import { Modules, Login} from './components/views';
import AddAssessments from './components/views/AddAssessments';
const UserContext = createContext();
import './App.scss';

function App() {
	// Set user state
	const [user, setUser] = useState({});

	return (
		<UserContext.Provider value={user}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login setUser={setUser} />} />
					<Route path="/modules" element={<Modules />} />
					<Route path="/addAssessments" element={<AddAssessments />}/>
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}

export default App;
export { UserContext };
