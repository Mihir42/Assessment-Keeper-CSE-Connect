import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Assessment from './components/views/Assessments.jsx';
import './App.scss';

function App() {

  const userLoggedIn = "Student"; //Logged in user
 

  return (
    <BrowserRouter>
      <Layout userLoggedIn={userLoggedIn}> {/*Header, nav and footer imported from Layout */}
        <Routes>

          <Route path="/assessment" element={<Assessment/>} /> {/*Route to Assessment page*/}

        </Routes>

      </Layout>
    </BrowserRouter>
  
  )

}

export default App
