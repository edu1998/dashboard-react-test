import NavbarTitle from "./NavbarTitle/NavbarTitle";
import './Navbar.css'
import NavbarActions from "./NavbarActions/NavbarActions";
import {AiOutlineHolder, AiOutlinePoweroff, AiOutlineStar} from "react-icons/ai";
import {IoMdNotificationsOutline} from 'react-icons/io';


const Navbar = ({children, title, titleLogo, subtitle}) => {
    const actions = [
        {
            icon: AiOutlinePoweroff,
            handleClick: (e) => console.log(e)
        },
        {
            icon: AiOutlineHolder,
            handleClick: (e) => console.log(e)
        },
        {
            icon: AiOutlineStar,
            handleClick: (e) => console.log(e)
        },
        {
            icon: IoMdNotificationsOutline,
            handleClick: (e) => console.log(e)
        }
    ]
    return (
        <nav className="navbar">
            <NavbarTitle className="navbar-content-title" title={title} logo={titleLogo} subtitle={subtitle} />
            <div className="navbar-content-custom" >{children}</div>
            <NavbarActions className="navbar-content-actions" actions={actions}/>
        </nav>
    )
}

export default Navbar
