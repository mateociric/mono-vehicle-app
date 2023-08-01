import { NavLink } from "react-router-dom";
import 'component/Navbar/Navbar.scss';

function Navbar() {

    return (
        <nav className="navbar flex-row">
            <NavLink to="/">HOMEPAGE</NavLink>
            <NavLink to="/UpdateCarList">UPDATE CAR LIST</NavLink>
            <NavLink to="/Help">HELP</NavLink>
        </nav>
    )
}

export default Navbar;