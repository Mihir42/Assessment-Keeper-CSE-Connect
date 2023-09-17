import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import APIWrapper from '../../utils/API';
import './LoginCard.scss';

const initialLoginAttempt = {
	LoginUsername: null,
	LoginPassword: '',
};


// login is email K2990629@kingston.ac.uk or 277
export default function LoginCard({ title, setUser }) {
	const API = new APIWrapper();
	const navigate = new useNavigate();

	// Initialisation ------------------------------------------------
	const conformance = {
		html2js : {
			LoginUsername: (value) => value === '' ? null : value,
			LoginPassword: (value) => value === '' ? null : value,
		},
		js2html : {
			LoginUsername: (value) => value === null ? '' : value,
			LoginPassword: (value) => value === null ? '' : value,
		},
	};
	// State ---------------------------------------------------------
	const [loginAttempt, setLoginAttempt] = useState(initialLoginAttempt);

	// Handlers ------------------------------------------------------
	const handleChange = (event) => {
		const { name, value } = event.target;
		setLoginAttempt({ ...loginAttempt, [name]: conformance.html2js[name](value) });
	};

	const handleSubmit = async (e) => {
		e?.preventDefault();
		try {
			const possibleUser = await API.get(`users/${loginAttempt.LoginUsername}`);
			if (possibleUser[0]) {
				setUser(possibleUser[0]);
				navigate('/modules');
			} else {
				alert('Incorrect username');
			}
		} catch (err) {
			console.log(err);
		}
	};

	// View ----------------------------------------------------------
	return(
		<div className="loginCard">
			<form onSubmit={(e) => handleSubmit(e)}>
				<h4 className="loginCard-header">{title}</h4>
				<div className="loginCard-body">
					<label htmlFor="userInput">
						Username
					</label>
					<input type="text" id="userInput" name="LoginUsername" value={conformance.js2html['LoginUsername'](loginAttempt.LoginUsername)} onChange={handleChange } autoComplete="false" />
					<label htmlFor="pwdInput">
						Password
					</label>
					<input type="password" id="pwdInput" name="LoginPassword" value={conformance.js2html['LoginPassword'](loginAttempt.LoginPassowrd)} onChange={handleChange} />
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<button type="submit" className="cancelButton">Cancel</button>
						<button type="button" className="loginButton" onClick={() => handleSubmit()}>Login</button>
					</div>
				</div>
			</form>
		</div>
	);
}

LoginCard.propTypes = {
	title: PropTypes.string,
	setUser: PropTypes.func,
};
