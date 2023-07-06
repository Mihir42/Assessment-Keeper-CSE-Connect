import { Header, Navbar } from '../layout';
import PropTypes from 'prop-types';
import '../../styles/Layout.scss';

export default function Layout(props) {
	return (
		<>
			<Header student={{ id: 1, firstName: 'Ben', secondName: 'F' }}/>
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
