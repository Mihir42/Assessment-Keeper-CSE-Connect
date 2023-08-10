import { Header, Navbar } from '../layout';
import PropTypes from 'prop-types';
import './Layout.scss';

export default function Layout({ user, children }) {
	return (
		<>
			<Header user={user}/>
			<Navbar />
			<div className="container" id="container">
				{children}
			</div>
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.element,
	user: PropTypes.object,
};
