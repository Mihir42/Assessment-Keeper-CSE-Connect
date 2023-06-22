import  { CardContainer, Card} from "../UI/Card.jsx";
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
    }
  ]

    return (
        <>
        <h1>Assessments</h1>
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