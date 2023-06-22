import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import SideNav from './SideNav.jsx';
import Footer from './Footer.jsx';
import './Layout.scss';

function Layout(props) //Responsible for how the page looks, sets page out, then sent to app.jsx
{
    return (
    <div className = "layout"> {/*Contains our views*/}
      <Header userLoggedIn={props.userLoggedIn}/> {/*Calling header code from Header.jsx, passing Javascript variable through header call */}
      <div className="mainContainer">
        <SideNav /> {/*Importing Navbar from Navbar.jsx */}
        {/*Created Side Navbar to avoid making changes to the previous Navbar made.
        Moved to the side and changed the layout to make it closer to the initial wire frame in the
        first meeting.*/}
        
        <main>
          {
              props.children //Loads layout's children elements from App.jsx 
          }
        </main>
      </div>
    </div>
    );
}

export default Layout;