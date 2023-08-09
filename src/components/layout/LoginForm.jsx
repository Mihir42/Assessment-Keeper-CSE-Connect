/* eslint-disable indent */
import Card from '../UI/Card';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.scss';
import APIWrapper from '../../utils/API';

const intialLogin = {
	UserID: 0,
	password: null,
};
function LoginForm() {
	// Initialisation --------------------

  const API = new APIWrapper();
  const navigate = new useNavigate();
  const moduleLeaderEndpoint = 'modules/leader/820';
  const tempPassword = 'Password1';

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
  const[moduleLeader, setModuleLeader] = useState(null);

  const getModuleLeader = async (endpoint) => {
		setModuleLeader(820);
		/*
    try {
      const response = await API.get(endpoint);
      if(response.error) throw new Error('error');

      setModuleLeader(response[0].ModuleLeaderID);
    } catch (err) {
      console.log(err);
      setModuleLeader('820');
    }
		*/
	};

    useEffect(() => {
      getModuleLeader(moduleLeaderEndpoint);
    }, [moduleLeaderEndpoint]);

	// Handlers --------------------------

	const handleChange = (event) => {
		const { name, value } = event.target;
		setLogin({ ...login, [name]: conformance.html2js[name](value) });
	};

	// Check if details are correct
	const handleLogIn = () => login.UserID == moduleLeader && login.password == tempPassword;

	// View ------------------------------

	return (
		<div className="loginBox">
		<Card title={'Login'}>
			<>
				<div className="mb-3">
					<label htmlFor="UserID" className="form-label">UserID:</label>
					<input type="email" className="input-field" name="UserID" id="UserID" defaultValue={conformance.js2html['UserID'](login.UserID)} onChange={handleChange} />
				</div>

				<div className="mb-3">
					<label htmlFor="password" className="form-label">Password:</label>
					<input type="email" className="input-field" name="password" id="password" defaultValue={conformance.js2html['password'](login.UserID)} onChange={handleChange} />
				</div>

				<button className="loginFormSubmit"	type="button" onClick={() => handleLogIn() ? navigate('/moduleView', { replace: true }) : null }>
					Login
				</button>
			</>
		</Card>
		</div>
	);
}

export default LoginForm;
