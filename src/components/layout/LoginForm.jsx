import Card from '../UI/Card';
import { useState } from 'react';
import './LoginForm.scss';

const intialLogin = {
	UserID: 0,
	password: null,
};
function LoginForm() {
	// Initialisation --------------------
	const conformance = {
		html2js: {
			UserID: (value) => (value === 0 ? null : parseInt(value)),
			password: (value) => value === '' ? null : value,
		},
		js2html: {
			UserID: (value) => (value === null ? '' : value),
			password: (value) => (value === null ? '' : value),
		},
	};

	// State -----------------------------

	const[login, setLogin] = useState(intialLogin);

	// Handlers --------------------------

	const handleChange = (event) => {
		const { name, value } = event.target;
		setLogin({ ...login, [name]: conformance.html2js[name](value) });
		handleLogIn();
	};

	const handleSubmit = () => {
		console.log(`UserID=[${JSON.stringify(login)}]`);
	};

	const handleLogIn = () => {
		if(login.UserID === 280) {
			console.log('Yes correct');
		}
	};

	// View ------------------------------

	return (
		<div className="loginBox">
			<Card title={'Login'}>
				<label className='label'>
                    User ID
					<input
						type="number"
						name="UserID"
						value={conformance.js2html['UserID'](login.UserID)}
						onChange={handleChange}
					/>
				</label>

				<label>
                    Password
					<input
						type="text"
						name="password"
						value={conformance.js2html['password'](login.password)}
						onChange={handleChange}
					/>
				</label>

				<button className = "loginFormSubmit"
					type= "button"
					onClick={handleSubmit}>
                    Login
				</button>
			</Card>
		</div>
	);
}

export default LoginForm;