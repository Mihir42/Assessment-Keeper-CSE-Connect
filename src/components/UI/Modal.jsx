import PropTypes from 'prop-types';
import './Modal.scss';

export default function Modal({ id, title, children, show, setShowModal }) {
	return (
		<div className={`modal fade ${show ? 'show' : ''}`} tabIndex="-1" id={id} style={{ display:`${show ? 'block' : 'none'}` }}>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">{title}</h5>
						<button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
					</div>
					<div className="modal-body">
						{children}
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
						<button type="button" className="btn btn-primary">Save changes</button>
					</div>
				</div>
			</div>
		</div>
	);
}

Modal.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	children: PropTypes.element,
	show: PropTypes.bool,
	setShowModal: PropTypes.func,
};
