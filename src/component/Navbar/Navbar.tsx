import { NavLink } from "react-router-dom";
import 'component/Navbar/Navbar.scss';
import THref from "model/model-navbar-href";

function Navbar(props: {href: THref}) {

    return (
        <nav className="navbar flex-row">
            <NavLink to={props.href.homepage.path}>{props.href.homepage.linkName}</NavLink>
            <NavLink to={props.href.update.path}>{props.href.update.linkName}</NavLink>
            <NavLink to={props.href.help.path}>{props.href.help.linkName}</NavLink>
        </nav>
    )
}

export default Navbar;