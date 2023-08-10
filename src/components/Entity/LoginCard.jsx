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

	const handleSubmit = async () => {
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
		<div className='loginCard'>
			<h4 className='loginCard-header'>{title}</h4>
			<div className='loginCard-body'>
				<label htmlFor="1">
          Username
					<input type="text" id="1" name="LoginUsername" value={conformance.js2html['LoginUsername'](loginAttempt.LoginUsername)} onChange={handleChange } autoComplete="false" />
				</label>
				<label htmlFor="2">
          Password
					<input type='password' id="2" name='LoginPassword' value={conformance.js2html['LoginPassword'](loginAttempt.LoginPassowrd)} onChange={handleChange} />
				</label>
				<button type='button' className='cancelButton' >Cancel</button>
				<button type='button' className='loginButton' onClick={handleSubmit} >Login</button>
			</div>
		</div>
	);
}

LoginCard.propTypes = {
	title: PropTypes.string,
	setUser: PropTypes.func,
};
