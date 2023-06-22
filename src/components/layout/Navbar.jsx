import { NavLink } from 'react-router-dom';
import './navbar.scss';

function Navbar() {

    return (

        <nav>
          <div className="navItem"> {/*Nav bar has child div's which are nav items for each page */}
            <NavLink to="/">Home</NavLink>
          </div>
          <div className="navItem">
            <NavLink to="/modules">Modules</NavLink>
          </div>
          <div className="navItem">
            <NavLink to="/assessment">Assessments</NavLink>
          </div>
        </nav>

    );
}

export default Navbar;