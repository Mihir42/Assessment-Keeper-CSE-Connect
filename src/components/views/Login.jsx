import { Header } from '../UI';
import { LoginCard } from '../Entity';
import PropTypes from 'prop-types';

export default function Login({ user, setUser }) {
	return (
		<>
			<Header user={user}/>
			<LoginCard title='Module Leader Login' user={user} setUser={setUser}/>
		</>
	);
}

Login.propTypes = {
	user: PropTypes.object,
	setUser: PropTypes.func,
};
