import Card from '../UI/Card';
import Accordion from '../UI/Accordion';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import APIWrapper from '../../utils/API';
import './Assessments.scss';

export default function Assessments({ activeModuleId = 0 }) {
	// Initialisation ------------------------------
	const API = new APIWrapper();
	// console.log(`activeModuleID = [${activeModuleId}]`);
	const assessmentEndpoint = activeModuleId === 0 ? 'assessments' : `assessments/module/${activeModuleId}`;

	// State ---------------------------------------
	const [assessments, setAssessments] = useState(null);

	const getAssessments = async (endpoint) => {
		try {
			const response = await API.get(endpoint);
			if (response.error) throw new Error('Error');
			setAssessments(response);
		} catch (err) {
			console.log(err);
			setAssessments([]);
		}

	};

	// Fetch student assessments on page load
	useEffect(() => {
		getAssessments(assessmentEndpoint);
	}, [assessmentEndpoint]);


	// Handlers ------------------------------------
	const handleFilter = () => {};
	const handleSort = () => {};

	// Helpers -------------------------------------
	/* function filterAssessments(e) {
		const search = e.target.value;
		if (search) {
			setStudentAssessments(studentAssessments.filter(c => c.moduleName.startsWith(search)));
		} else {
			fetchStudentAssessments();
		}
	} */
	/* async function sortingAssessments(e) {
		const sort = e.target.value;

		switch (sort) {
			case 'oldest': {
				const assessments = await fetchStudentAssessments();
				return setStudentAssessments(assessments.sort((a, b) => new Date(b.AssessmentPublishdate) - new Date(a.AssessmentPublishdate)));
			}
			case 'newest': {
				const assessments = await fetchStudentAssessments();
				return setStudentAssessments(assessments.sort((a, b) => new Date(a.AssessmentPublishdate) - new Date(b.AssessmentPublishdate)));
			}
			default:
				setStudentAssessments(await fetchStudentAssessments());
		}
	} */

	console.log(assessments);
	// View ----------------------------------------
	return (
		<Card title={'Assessment'}>
			<>
				<div className="row">
					<div className="col-sm-8">
						<input type="text" className="form-control" placeholder="Search" onChange={(e) => handleFilter(e)}/>
					</div>
					<div className="col-sm-3">
						<select name="sort" id="sortSelect" className="form-control" onChange={(e) => handleSort(e)}>
							<option value="relevant">Relevant</option>
							<option value="oldest">Oldest</option>
							<option value="newest">Newest</option>
						</select>
					</div>
				</div>
				{assessments == null || assessments.length == 0 || Array.isArray(assessments) == false
					? <p>No Assessments uploaded for this module</p>
					:
					<>
						{assessments.map(assessment => <Accordion assessment={assessment} id={assessment.AssessmentID} key={assessment.AssessmentID} />)}
					</>
				}
			</>
		</Card>
	);
}

Assessments.propTypes = {
	activeModuleId: PropTypes.number,
};
