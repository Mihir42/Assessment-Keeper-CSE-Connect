import  { CardContainer, Card} from "../UI/Card.jsx";
import API from "../API/API.jsx";
import './Assessment.scss';


function Assessment() {

  const assessments = [ //Creating list of objects storing assessments details
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

  function getModules()
  {
    const data = API.get();
    return(data);

  }

  console.log(getModules());
{/*}
  const [assessments, setAssessments] = useState([]); //Creating state variable, setting to empty array

  useEffect(() => { //UseEffect hook, runs when page loads
    setAssessments(assessmentsArr); //Setting state variable to assessmentsArr
  }, []); //Empty array means it only runs once
*/}

  {/*
  TODO: Add filter function
  TODO: Add sort by date function
  TODO: Get from API provided by Alex and Henri
  Was unable to implement these functions as I was unsure on how to approach this.
  */
  }


  return (
      <>
      <h1>Assessments</h1>
      <button className="filterBtn">Filter</button>
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