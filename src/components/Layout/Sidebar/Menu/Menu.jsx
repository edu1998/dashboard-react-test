import {useState} from "react";
import {Link} from "react-router-dom";

import './Menu.css';

import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight} from 'react-icons/md'


const RenderItems = ({items, isChildren, handleClick}) => {

    const [forceRender, setForceRender ] = useState(+new Date())

    const handleClickItem = (item) => {
        item.active =  !item.active;
        setForceRender(+new Date());
        handleClick(item)
    }

    return items.map((item, index) => {
            return (
                    <div key={index} className={`container-menu-parent`}>
                        <div
                            className={`container-menu-item ${item.active ? 'container-menu-item__active' : ''} ${isChildren ? 'container-menu-parent__child' : ''} ${item?.active && isChildren ? 'container-menu-parent__child__active': '' }`}
                            onClick={() => handleClickItem(item)}
                        >
                            {!isChildren && (item?.children && item.active ?  <MdOutlineKeyboardArrowDown className="container-menu-item-row" size={20}/> : <MdOutlineKeyboardArrowRight className="container-menu-item-row" size={20}/>) }
                            {!isChildren && <item.icon size={20}/>}
                            <Link className={`${item.active ? 'container-menu-item__active' : ''}`} to="/">{ item.label }</Link>
                        </div>
                        {item?.active && item?.children && <div className={`container-menu-children ${isChildren ? 'container-menu-children__ischild' : ''}`}>
                            {<RenderItems items={item.children} isChildren={true} handleClick={handleClick}/>}
                        </div>}
                    </div>
            )
        })
}

const Menu = ({items = [], handleClick}) => {
    return (
        <div className="container-menu">
            <RenderItems items={items} handleClick={handleClick}/>
        </div>
    )
}

export default Menu;
