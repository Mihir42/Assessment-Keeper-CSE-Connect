import PropTypes from 'prop-types';
import { useState } from 'react';
import './Dropdown.scss';

export default function Dropdown({ children, button }) {
	const [show, setShow] = useState(false);
	return (
		<div className="dropdown">
			<button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => setShow(!show)}>
				{button}
			</button>
			<ul className={`dropdown-menu ${show ? 'show' : ''}`} aria-labelledby="dropdownMenuButton1">
				{children}
			</ul>
		</div>
	);
}

Dropdown.propTypes = {
	children: PropTypes.element,
	button: PropTypes.element,
};
