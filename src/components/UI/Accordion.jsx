import PropTypes from 'prop-types';
import './Accordion.scss';

export default function Accordion({ task, id }) {
	return (
		<div className="accordion" id="accordionExample">
			<div className="accordion-item">
				<h2 className="accordion-header">
					<button className="accordion-button row collapsed" type="button"
						data-bs-toggle="collapse" data-bs-target={`#collapse_${id}`} aria-expanded="false" aria-controls="collapseOne">
						<div className="col-sm-8">{task.AssessmentName}</div>
						<div className="col-sm-3">{new Date(task.AssessmentPublishdate).toLocaleDateString('en-GB')}</div>
					</button>
				</h2>
				<div id={`collapse_${id}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
					<div className="accordion-body">
						<p>{task.AssessmenttypeDescription}</p>
						<p>Page URL: <a href={task.AssessmentBriefURL}>{task.AssessmentBriefURL}</a></p>
					</div>
				</div>
			</div>
		</div>
	);
}

Accordion.propTypes = {
	id: PropTypes.string,
	task: {
		AssessmentName: PropTypes.string,
		AssessmentPublishdate: PropTypes.string,
		AssessmenttypeDescription: PropTypes.stirng,
		AssessmentBriefURL: PropTypes.string,
	},
};
