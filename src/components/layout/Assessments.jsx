import Card from '../UI/Card';
import StudentAssessmentAccordion from './StudentAssessmentAccordion';
import LeaderAssessmentAccordion from './LeaderAssessmentAccordion';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import APIWrapper from '../../utils/API';

export default function Assessments({ activeModuleId = 0, isModuleLeader = false }) {
	// Initialisation ------------------------------
	const API = new APIWrapper();
	const assessmentEndpoint = activeModuleId === 0 ? 'assessments' : `assessments/module/${activeModuleId}`;

	// State ---------------------------------------
	const [assessments, setAssessments] = useState(null);

	const getAssessments = async (returnValues = false) => {
		try {
			const response = await API.get(assessmentEndpoint);
			if (response.error) throw new Error('Error');
			setAssessments(response);
			return (returnValues) ? response : setAssessments(response);
		} catch (err) {
			console.log(err);
			return (returnValues) ? [] : setAssessments([]);
		}
	};


	// Fetch student assessments on page load
	useEffect(() => {
		getAssessments();
	}, [assessmentEndpoint]);


	// Handlers ------------------------------------
	function handleFilter(e) {
		const search = e.target.value;
		if (search.length > 0) {
			setAssessments(assessments.filter(c => c.AssessmentName.startsWith(search)));
		} else {
			getAssessments();
		}
	}

	async function handleSort(e) {
		const sort = e.target.value;

		switch (sort) {
			case 'oldest': {
				const tempAssessments = await getAssessments(true);
				return setAssessments(tempAssessments.sort((a, b) => new Date(a.AssessmentPublishdate) - new Date(b.AssessmentPublishdate)));
			}
			case 'newest': {
				const tempAssessments = await getAssessments(true);
				return setAssessments(tempAssessments.sort((a, b) => new Date(b.AssessmentPublishdate) - new Date(a.AssessmentPublishdate)));
			}
			default:
				setAssessments(await getAssessments(true));
		}
	}


	// View ----------------------------------------
	return (
		<Card title={'Assessment'}>
			<>
				<div className="row" style={{ paddingLeft: '32px' }}>
					<div className="col-sm-8">
						<input type="text" className="input-field" placeholder="Search" onChange={(e) => handleFilter(e)}/>
					</div>
					<div className="col-sm-3">
						<select name="sort" id="sortSelect" className="input-field" onChange={(e) => handleSort(e)}>
							<option value="relevant">Relevant</option>
							<option value="oldest">Oldest</option>
							<option value="newest">Newest</option>
						</select>
					</div>
				</div>
				&nbsp;
				{assessments == null || assessments.length == 0 || Array.isArray(assessments) == false
					? <p>No Assessments uploaded for this module</p>
					:
					<>
						{assessments.map(assessment => {
							// TODO: REPLACE MATH.RANDOM with actual data
							return isModuleLeader ?
								<LeaderAssessmentAccordion assessment={assessment} key={assessment.AssessmentID} />
								: <StudentAssessmentAccordion assessment={assessment} isFavourite={Math.random() < 0.5} key={assessment.AssessmentID} />;
						})}
					</>
				}
			</>
		</Card>
	);
}

Assessments.propTypes = {
	activeModuleId: PropTypes.number,
	isModuleLeader: PropTypes.bool,
};
