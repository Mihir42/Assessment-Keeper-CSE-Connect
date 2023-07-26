import PropTypes from 'prop-types';
import './Accordion.scss';

export default function Accordion({ assessment, id }) {
	return (
		<div className="accordion" id="accordionExample">
			<div className="accordion-item">
				<h2 className="accordion-header">
					<button className="accordion-button row collapsed" type="button"
						data-bs-toggle="collapse" data-bs-target={`#collapse_${id}`} aria-expanded="false" aria-controls="collapseOne">
						<div className="col-sm-8">{assessment.AssessmentName}</div>
						<div className="col-sm-3">{new Date(assessment.AssessmentPublishdate).toLocaleDateString('en-GB')}</div>
					</button>
				</h2>
				<div id={`collapse_${id}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
					<div className="accordion-body">
						<p>{assessment.AssessmenttypeDescription}</p>
						<p>Page URL: <a href={assessment.AssessmentBriefURL}>{assessment.AssessmentBriefURL}</a></p>
					</div>
				</div>
			</div>
		</div>
	);
}

Accordion.propTypes = {
	id: PropTypes.number,
	assessment: PropTypes.object,
	/* assessment: PropTypes.shape({
		AssessmentID: PropTypes.number,
		AssessmentName: PropTypes.string,
		AssessmentPublishdate: PropTypes.string,
		AssessmentSubmissiondate:PropTypes.string,
		AssessmentFeedbackdate:PropTypes.string,
		AssessmentBriefURL: PropTypes.string,
		AssessmentModuleID: PropTypes.string,
		AssessmentAssessmentTypeID: PropTypes.number,
		AssessmentModuleName: PropTypes.string,
		AssessmenttypeDescription: PropTypes.string,
	}), */
};
