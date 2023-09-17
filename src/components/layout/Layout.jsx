import { Header, Navbar } from '../UI';
import PropTypes from 'prop-types';
import './Layout.scss';

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<Navbar />
			<div className="container-fluid" id="container">
				{children}
			</div>
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.element,
};
