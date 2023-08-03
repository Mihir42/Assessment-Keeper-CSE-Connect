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
        try {
            const response = await API.get(endpoint);
            if(response.error) throw new Error('error');

            setModuleLeader(response[0].ModuleLeaderID);
        } catch (err) {
            console.log(err);
            setModuleLeader([]);
        }
    };

    useEffect(() => {
        getModuleLeader(moduleLeaderEndpoint);
    }, [moduleLeaderEndpoint]);

	// Handlers --------------------------

	const handleChange = (event) => {
		const { name, value } = event.target;
		setLogin({ ...login, [name]: conformance.html2js[name](value) });

	};

	const handleSubmit = () => {
		console.log(`UserID=[${JSON.stringify(login)}]`);
	};

	const handleLogIn = () => {
		if(login.UserID === moduleLeader && login.password == tempPassword) {
            // console.log('Number entered ', login.UserID, 'ModuleLeaderID', moduleLeader);
            return true;
        } else { return false; }
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
					onClick={handleLogIn() === true
                    ? navigate('/moduleView', { replace: true })
                    : console.log('No')}>
                    Login
				</button>
			</Card>
		</div>
	);
}

export default LoginForm;