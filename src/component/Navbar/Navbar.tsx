import { NavLink } from "react-router-dom";
import 'component/Navbar/Navbar.scss';
import THref from "model/model-navbar-href";

function Navbar(props: {href: THref}) {

    return (
        <nav className="navbar">
            <NavLink to={props.href.homepage.path}>{props.href.homepage.linkName}</NavLink>
            <NavLink to={props.href.favorite.path}>{props.href.favorite.linkName}</NavLink>
            <NavLink to={props.href.help.path}>{props.href.help.linkName}</NavLink>
        </nav>
    )
}

export default Navbar;