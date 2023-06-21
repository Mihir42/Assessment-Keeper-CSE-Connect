import Header from './Header.jsx';
import './App.scss';

function App() {

  const userLoggedIn = "Student"; //Logged in user
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
    
    <div className = "layout"> {/*Header, main, footer all in div*/}
      <Header userLoggedIn = {userLoggedIn}/> {/*Calling header code from Header.jsx, passing Javascript variable through header call */}

      <nav>
        <div className = "navItem"> {/*Nav bar has child div's which are nav items for each page */}
          <a to = "/">Home</a>
        </div>
        <div className = "navItem">
          <a to = "/modules">Modules</a>
        </div>
        <div className = "navItem">
          <a to = "/students">Assessments</a>
        </div>
      </nav>

      <main>
        <h1>Assessments</h1> {/*View of the page */}
        <div className = "assessmentContainer"> {/*Contains all the assessments */}
        {
          assessments.map((assessment)=>{ //brackets contain parameter, points to code to be executed
            return(
              <div className = "assessmentCard" key = {assessment.AssessmentModule}>
                <div className = "card" key = {assessment.AssessmentTitle}>
                  <p>{assessment.AssessmentTitle}</p> {/*key attached to the tags*/}
                  <p>Due date: {assessment.AssessmentDueDate}</p> {/*Each assessment date and title is wrapped in a div */}
                </div>
              </div>
            ) 
          })
        }
        </div>
      </main>

      <footer>
        <p className = "thankyou">Thank you for using this system</p>
      </footer>

    </div>
  
  )

}

export default App
