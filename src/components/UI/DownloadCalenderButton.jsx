import PropTypes from 'prop-types';

export default function DownloadCalenderButton({ assessment }) {
	function downloadCalenderFile() {
		const yyyy = `${new Date(assessment.AssessmentPublishdate).getFullYear()}`;
		const mm = `${new Date(assessment.AssessmentPublishdate).getMonth()}`.padStart(2, '0');
		const dd = `${new Date(assessment.AssessmentPublishdate).getDate()}`.padStart(2, '0');

		const bytes = new TextEncoder().encode(`
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:${assessment.AssessmentAssessmenttypeDescription}
DTSTART;VALUE=DATE:${yyyy}${mm}${dd}
DTEND;VALUE=DATE:${yyyy}${mm}${Number(dd) + 1}
LOCATION:Uni
SUMMARY;LANGUAGE=en-us:${assessment.AssessmentName}
END:VEVENT
END:VCALENDAR
`);
		const blob = new Blob([bytes], {
			type: 'application/json;charset=utf-8',
		});
		// Create blob link to download
		const url = window.URL.createObjectURL(new Blob([blob]));
		const link = document.createElement('a');
		link.href = url;
		link.setAttribute('download', `${assessment.AssessmentName}.ics`);

		// Add to page, click and then remove from page
		document.body.appendChild(link);
		link.click();
	}

	return (
		<button className="btn" onClick={() => downloadCalenderFile()}>Download Calender file</button>
	);
}

DownloadCalenderButton.propTypes = {
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
