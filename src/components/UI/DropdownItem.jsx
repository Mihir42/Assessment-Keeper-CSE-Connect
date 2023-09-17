import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { useState } from 'react';
TimeAgo.addDefaultLocale(en);

export default function DropdownItem({ assessment }) {
	const timeAgo = new TimeAgo('en-US');
	const [show, setShow] = useState(true);

	function updateList(e) {
		e.preventDefault();
		e.stopPropagation();
		setShow(false);
	}

	return show ? (
		<li key={assessment.AssessmentID}>
			<NavLink className="dropdown-item" to={`/assessments/${assessment.AssessmentID}`} style={{ display: 'flex', justifyContent: 'space-between' }}>
				{assessment.AssessmentName}
				<button className="btn" onClick={(e) => updateList(e)}>X</button>
			</NavLink>
			<span className="timeAgo">
				({timeAgo.format(new Date(assessment.AssessmentPublishdate))})
			</span>
		</li>
	) : null;
}

DropdownItem.propTypes = {
	assessment: PropTypes.shape({
		AssessmentID: PropTypes.number,
		AssessmentName: PropTypes.string,
		AssessmentPublishdate: PropTypes.string,
		AssessmentSubmissiondate:PropTypes.string,
		AssessmentFeedbackdate:PropTypes.string,
		AssessmentBriefURL: PropTypes.string,
		AssessmentModuleID: PropTypes.number,
		AssessmentAssessmentTypeID: PropTypes.number,
		AssessmentModuleName: PropTypes.string,
		AssessmenttypeDescription: PropTypes.string,
		AssessmentAssessmenttypeDescription: PropTypes.string,
	}),
};
