import './header.scss';

function Header(props) { //properties object contains properties for each variable we pass through
    return (

        <header>
        <h1>Due dates application</h1>
        <p className = "welcome">Welcome {props.userLoggedIn}</p> {/*Javascript variable to show who is logged in*/}
      </header>

    );

}

export default Header;