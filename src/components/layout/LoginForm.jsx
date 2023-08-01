import Card from '../UI/Card';
import {useState} from 'react';
import './LoginForm.scss';
function LoginForm() {
    // Initialisation --------------------
    // State -----------------------------
    const[signInAttempt, setSignInAttempt] = useState(null);
    // Handlers --------------------------
    // View ------------------------------
    //42
    return (
        <div className="loginBox">
            <Card title={'Login'}>
                <label htmlFor="">User ID</label>
                <input type="text" name="UserID" value=""/>

                <label htmlFor="">Password</label>
                <input type="text" name="Password" value=""/>
            </Card>
		</div> 
    );
}

export default LoginForm;