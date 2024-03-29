import { NavLink } from "react-router-dom";

function NavBar() {
    const linkStyles = {
        display: "inline-block",
        // width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        // background: "blue",
        textDecoration: "none",
        // textShadow: "3px 3px 3px #fff",
        color: "#333",
        fontSize: "2em",
        textSizeAdjust: "auto"
      };

    // const navVisi = {
    //     visibility: "visible"
    // }
    // onHover={navVisi}

    return (
        <div className="nav-bar">
            {/* <img src="" style={{ height: `100%`, marginLeft: `-2%`}}></img> */}
                <NavLink activeClassName="active" to="/dowlingecodes" exact style={linkStyles} activeStyle={{ textShadow: "2px 2px 5px white"}}>
                <i class="fa-solid fa-house"></i> Home
                </NavLink>
                <NavLink activeClassName="active" to="/about" exact style={linkStyles} activeStyle={{ textShadow: "2px 2px 5px white"}}>
                <i class="fa-solid fa-align-center"></i> About
                </NavLink>
                <NavLink activeClassName="active" to="/portfolio" exact style={linkStyles} activeStyle={{ textShadow: "2px 2px 5px white"}}>
                <i class="fa-solid fa-folder-open"></i> Portfolio
                </NavLink>
                <NavLink activeClassName="active" to="/contact" exact style={linkStyles} activeStyle={{ textShadow: "2px 2px 5px white"}}>
                <i class="fa-solid fa-address-card"></i> Contact
                </NavLink>
                <a href="https://docs.google.com/document/d/1iB2wZfiEI73TRKqixvNwM-io5t019rjMuoJJRYKSEoA/edit?usp=sharing" activeClassName="active" style={linkStyles} activeStyle={{ textShadow: "1.5px 1.5px 1.5px white"}} target="_blank"> <i class="fa-solid fa-file-arrow-down"></i> Resume</a>
                {/* <hr></hr> */}
        </div>)
}

export default NavBar;