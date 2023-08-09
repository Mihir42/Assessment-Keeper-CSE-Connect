import PropTypes from 'prop-types';
import './Accordion.scss';

export default function Accordion({ children, active, header }) {
	return (
		<div className="accordion" id="accordionExample">
			<div className="accordion-item">
				<h2 className="accordion-header">
					{header}
				</h2>
				<div className={`accordion-collapse collapse ${active ? 'show' : ''}`}>
					<div className="accordion-body">
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}

Accordion.propTypes = {
	children: PropTypes.element,
	header: PropTypes.element,
	active: PropTypes.bool,
};
