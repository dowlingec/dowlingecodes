import { NavLink } from "react-router-dom";

function NavBar() {
    const linkStyles = {
        display: "inline-block",
        // width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        // background: "blue",
        textDecoration: "none",
        color: "white",
        fontSize: "5em"
      };

    return (
        <div className="nav-bar">
            {/* <img src="" style={{ height: `100%`, marginLeft: `-2%`}}></img> */}
                <NavLink activeClassName="active" to="/" exact style={linkStyles} activeStyle={{ background: "rgb(43, 13, 83)"}}>
                    Home
                </NavLink>
                <NavLink activeClassName="active" to="/about" exact style={linkStyles} activeStyle={{ background: "rgb(43, 13, 83)"}}>
                    About
                </NavLink>
                <NavLink activeClassName="active" to="/portfolio" exact style={linkStyles} activeStyle={{ background: "rgb(43, 13, 83)"}}>
                    Portfolio
                </NavLink>
                <NavLink activeClassName="active" to="/contact" exact style={linkStyles} activeStyle={{ background: "rgb(43, 13, 83)"}}>
                    Contact
                </NavLink>
        </div>)
}

export default NavBar;