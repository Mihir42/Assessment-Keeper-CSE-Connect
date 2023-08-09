/* eslint-disable */
import PropTypes from 'prop-types';
import './LoginCard.scss';

import './LoginCard.scss';
export default function LoginCard(props) {
    // Initialisation ------------------------------------------------
    // State ---------------------------------------------------------
    // Handlers ------------------------------------------------------
    // View ----------------------------------------------------------
    return(
        <div className='loginCard'>
            <h4 className='loginCard-header'>{props.title}</h4>
            <div className='loginCard-body'>
                {props.children}
                <label htmlFor=''>Username</label>
                <input type='text' name='UserName' value=''></input>

            </div>
        </div>
    );
}

LoginCard.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
};