/* eslint-disable */
import PropTypes from 'prop-types';
import { useState } from 'react';
import './LoginCard.scss';

const initialLoginAttempt = {
    LoginUsername: null,
    LoginPassword: "",
};

export default function LoginCard(props) {
    // Initialisation ------------------------------------------------
    const conformance ={
        html2js : {
            LoginUsername: (value) => value === '' ? null : value,
            LoginPassword: (value) => value === '' ? null : value,
        },
        js2html : {
            LoginUsername: (value) => value === null ? '' : value,
            LoginPassword: (value) => value === null ? '' : value,
        }
    };
    // State ---------------------------------------------------------
    const [loginAttempt, setLoginAttempt] = useState(initialLoginAttempt);
    // Handlers ------------------------------------------------------
    const handleChange = (event) => {
        const { name, value } = event.target;
        setLoginAttempt({ ...loginAttempt, [name]: conformance.html2js[name](value) });
    };
    
    const handleSubmit = () => {
        console.log(`Module=[${JSON.stringify(loginAttempt)}]`)
    };
    // View ----------------------------------------------------------
    return(
        <div className='loginCard'>
            <h4 className='loginCard-header'>{props.title}</h4>
            <div className='loginCard-body'>
                <label>
                    Username
                    <input type="text" name="LoginUsername" value={conformance.js2html["LoginUsername"](loginAttempt.LoginUsername)} onChange={handleChange } />
                </label>

                <label>
                    Password
                    <input type='password' name='LoginPassword' value={conformance.js2html["LoginPassword"](loginAttempt.LoginPassowrd)} onChange={handleChange} />
                </label>

                <button type='button' className='cancelButton' >Cancel</button>
                <button type='button' className='loginButton' onClick={handleSubmit} >Login</button>

            
            </div>
        </div>
    );
}

LoginCard.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
};