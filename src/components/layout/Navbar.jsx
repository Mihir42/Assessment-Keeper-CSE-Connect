import './navbar.scss';

function Navbar() {

    return (

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

    );
}

export default Navbar;