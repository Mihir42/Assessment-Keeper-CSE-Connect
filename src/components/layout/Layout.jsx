import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import './Layout.scss';

function Layout(props) //Responsible for how the page looks, sets page out, then sent to app.jsx
{
    return (
    <div className = "layout"> {/*Contains our views*/}
      <Header userLoggedIn={props.userLoggedIn}/> {/*Calling header code from Header.jsx, passing Javascript variable through header call */}
      <Navbar /> {/*Importing Navbar from Navbar.jsx */}
      
      <main>
        {
            props.children //Loads layout's children elements from App.jsx 
        }
      </main>
      <Footer /> {/*Importing Footer from Footer.jsx */}
    </div>
    );
}

export default Layout;