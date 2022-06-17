import './NavbarTitle.css'

const NavbarTitle = ({title, logo}) => {
    return (
        <div className="navbar-content-title">
            {logo}
            <h1 className="navbar-title-label">{title}</h1>
            <h3 className="navbar-subtitle-label">Nombre del producto</h3>
        </div>
    )
}
export default NavbarTitle;
