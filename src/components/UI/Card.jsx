import PropTypes from 'prop-types';
import './Card.scss';

export function Card(props) {
	return (
		<div className="card">
			<h4 className="card-header">{props.title}  <div style={{ float:'right' }}>{props.leftHand}</div>
			</h4>
			<div className="card-body">
				{props.children}
			</div>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	children: PropTypes.element,
	leftHand: PropTypes.element,
};

export function CardContainer(props) {
	return (
		<>
			{props.children}
		</>
	);
}

CardContainer.propTypes = {
	children: PropTypes.element,
};

export default Card;
