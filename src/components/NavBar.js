import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <div className="nav-bar">
            {/* <img src="" style={{ height: `100%`, marginLeft: `-2%`}}></img> */}
                <NavLink activeClassName="active" to="/" exact>
                    Home
                </NavLink>
                <NavLink activeClassName="active" to="/about" exact>
                    About
                </NavLink>
                <NavLink activeClassName="active" to="/portfolio" exact>
                    Portfolio
                </NavLink>
                <NavLink activeClassName="active" to="/contact" exact>
                    Contact
                </NavLink>
        </div>)
}

export default NavBar;