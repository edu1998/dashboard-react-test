import './Menu.css';
import {Link} from "react-router-dom";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Menu = ({items = []}) => {
    return (
        <div className="container-menu">
            {items.map((item, index) => {
                return (
                    <div key={index} className={`container-menu-item ${item.active ? 'container-menu-item__active' : ''}`}>
                        <MdOutlineKeyboardArrowRight className="container-menu-item-row" size={20}/>
                        {<item.icon size={20}/>}
                        <Link className={`${item.active ? 'container-menu-item__active' : ''}`} to="/">{ item.label }</Link>
                    </div>
                )
            })}

        </div>
    )
}

export default Menu;
