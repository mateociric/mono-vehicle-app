import 'component/Header/Header.scss';
import Navbar from 'component/Header/Navbar/Navbar';
import THref from 'model/model-navbar-href';

function Header() {

    const href: THref = {
        homepage: {
            path: '/',
            linkName: 'HOMEPAGE',
        },
        favorite: {
            path: '/Favorite',
            linkName: 'FAVORITE',
        },
        help: {
            path: '/Help',
            linkName: 'HELP',
        },
    }

    return (
        <header className="header">
            <Navbar href={href}></Navbar>
        </header>
    )
}

export default Header;