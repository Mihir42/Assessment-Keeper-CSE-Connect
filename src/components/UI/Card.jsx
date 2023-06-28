import './Card.scss';

export function CardContainer(props) {
	return <div className = "assessmentContainer">{props.children}</div>;
}

export function Card(props) {
	return (
		<div className = "card">
			{ props.children }
		</div>
	);
}

export default Card;
