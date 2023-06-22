import  { CardContainer, Card} from "../UI/Card.jsx";
import { useState, useEffect } from 'react'; //Importing useState from react
import './Assessment.scss';


function Assessment() {

  const assessmentsArr = [ //Creating list of objects storing assessments details
  {
    AssessmentTitle: "Assessment 1",
    AssessmentModule: "Module 1",
    AssessmentDueDate: "01/01/2023",
  },
  {
    AssessmentTitle: "Assessment 2",
    AssessmentModule: "Module 2",
    AssessmentDueDate: "01/01/2023",
  },
  {
    AssessmentTitle: "Assessment 3",
    AssessmentModule: "Module 3",
    AssessmentDueDate: "01/01/2023",
  },
  {
    AssessmentTitle: "Assessment 3",
    AssessmentModule: "Module 3",
    AssessmentDueDate: "01/01/2023",
  },
  {
    AssessmentTitle: "Assessment 4",
    AssessmentModule: "Module 4",
    AssessmentDueDate: "01/01/2023",
  },
  {
    AssessmentTitle: "Assessment 5",
    AssessmentModule: "Module 5",
    AssessmentDueDate: "01/01/2023",
  }]

  const [assessments, setAssessments] = useState([]); //Creating state variable, setting to empty array

  useEffect(() => { //UseEffect hook, runs when page loads
    setAssessments(assessmentsArr); //Setting state variable to assessmentsArr
  }, []); //Empty array means it only runs once

  function OrganiseByName() {
    assessments.sort(function(a, b) { //Sorts assessments by name
      var nameA = a.AssessmentTitle.toUpperCase(); // ignore upper and lowercase
      var nameB = b.AssessmentTitle.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) { //Sorts in ascending order
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
  }

  function GetAssessments() {
    assessments.map((assessment)=>{ //brackets contain parameter, points to code to be executed
      return(
        <div className = "assessmentCard" key = {assessment.AssessmentModule}>
          <Card>
            <p>{assessment.AssessmentTitle}</p> {/*key attached to the tags*/}
            <p>Due date: {assessment.AssessmentDueDate}</p> {/*Each assessment date and title is wrapped in a div */}
          </Card>
        </div>
      )
    })
  }

  return (
      <>
      <h1>Assessments</h1>
      <button className="filterBtn" onClick={OrganiseByName}>Filter</button>
      <CardContainer> {/*Contains all the assessments */}
      {
        assessments.map((assessment)=>{ //brackets contain parameter, points to code to be executed
          return(
            <div className = "assessmentCard" key = {assessment.AssessmentModule}>
              <Card>
                <p>{assessment.AssessmentTitle}</p> {/*key attached to the tags*/}
                <p>Due date: {assessment.AssessmentDueDate}</p> {/*Each assessment date and title is wrapped in a div */}
              </Card>
            </div>
          )
        })
      }
      </CardContainer>
      </>
  );
}

export default Assessment;