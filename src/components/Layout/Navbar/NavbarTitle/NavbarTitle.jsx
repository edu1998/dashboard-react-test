import './NavbarTitle.css'

const NavbarTitle = ({title, logo, subtitle}) => {
    return (
        <div className="navbar-content-title">
            {logo}
            <h1 className="navbar-title-label">{title}</h1>
            <h3 className="navbar-subtitle-label">{subtitle}</h3>
        </div>
    )
}
export default NavbarTitle;
