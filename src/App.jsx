import Layout from './components/layout/Layout.jsx';
import Assessment from './components/views/Assessments.jsx';

import './App.scss';

function App() {

  const userLoggedIn = "Student"; //Logged in user
 

  return (
    <Layout userLoggedIn = {userLoggedIn}> {/*Header, nav and footer imported from Layout */}

        <Assessment /> {/*Children elements of Layout*/}


    </Layout>
  
  )

}

export default App
