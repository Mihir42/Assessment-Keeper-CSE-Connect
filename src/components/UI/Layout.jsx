import { Header, Navbar } from '../layout';
import PropTypes from 'prop-types';
import './Layout.scss';

export default function Layout(props) {
	return (
		<>
			<Header />
			<Navbar />
			<div className="container" id="container">
				{props.children}
			</div>
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.element,
};
