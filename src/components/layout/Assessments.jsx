import Card from '../UI/Card';
import PropTypes from 'prop-types';
import '../../styles/Assessments.scss';

export default function Assessments({ tasks }) {
	return (
		<Card title={'Assessment'}>
			<div className="accordion" id="accordionExample">
				{tasks.map(task => (
					<div className="accordion-item" key={task.AssessmentID}>
						<h2 className="accordion-header">
							<button className="accordion-button row" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse_${tasks.indexOf(task)}`} aria-expanded="false" aria-controls="collapseOne" style={{ minWidth:'100%' }}>
								<div className="col-sm-8">{task.AssessmentName}</div>
								<div className="col-sm-3">{new Date(task.AssessmentPublishdate).toLocaleDateString('en-GB')}</div>
							</button>
						</h2>
						<div id={`collapse_${tasks.indexOf(task)}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
							<div className="accordion-body">
								<p>{task.AssessmentTypeDescription}</p>
								<p>Page URL: <a href={task.AssessmentBriefURL}>{task.AssessmentBriefURL}</a></p>
							</div>
						</div>
					</div>
				))}
			</div>
		</Card>
	);
}

Assessments.propTypes = {
	tasks: PropTypes.array,
};
