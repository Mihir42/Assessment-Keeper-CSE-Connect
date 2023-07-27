import Header from '../layout/Header';
import Card from '../UI/Card.jsx';
import { useState } from 'react';
import Modules from '../layout/Modules';
export default function Login() {
	const [userID, setUserID] = useState(null);

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	console.log(userID);
	return (
		<>
			<Header/>
			<Card title='Login'>
				<form onSubmit={handleSubmit}>
					Enter your userID: <input type='text' id='firstName' value={userID} placeholder='User ID' onChange={(event) => setUserID(event.target.value)}/>
				</form>
			</Card>
		</>
	);
}