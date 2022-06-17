import NavbarTitle from "./NavbarTitle/NavbarTitle";
import './Navbar.css'
import NavbarActions from "./NavbarActions/NavbarActions";

const Navbar = ({children, title, titleLogo}) => {
    return (
        <nav className="navbar">
            <NavbarTitle className="navbar-content-title" title={title} logo={titleLogo} />
            <div className="navbar-content-custom" >{children}</div>
            <NavbarActions className="navbar-content-actions"/>
        </nav>
    )
}

export default Navbar
