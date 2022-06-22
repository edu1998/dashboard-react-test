import {useState} from "react";
import { NavLink} from "react-router-dom";

import './Menu.css';

import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight} from 'react-icons/md'


const RenderItems = ({items, isChildren }) => {

    const [forceRender, setForceRender ] = useState(+new Date())

    const handleClickItem = (item) => {
        item.open = !item.open
        setForceRender(+new Date())
    }

    return items.map((item, index) => {
            let tagAStyle =  isChildren ? {borderRadius: '4px', padding: '5px 20px', color: '#0F4C81'} : undefined
            return (
                    <div key={index} className={`container-menu-parent`}>
                        <div
                            className={`container-menu-item  ${isChildren ? 'container-menu-parent__child' : ''}`}
                            onClick={() => handleClickItem(item)}
                        >
                            {!isChildren && (item?.children && item.open ?  <MdOutlineKeyboardArrowDown className="container-menu-item-row" size={20}/> : <MdOutlineKeyboardArrowRight className="container-menu-item-row" size={20}/>) }
                            {!isChildren && <item.icon size={20}/>}
                            <NavLink
                                style={tagAStyle}
                                to={item.path || '/'}
                                className={({ isActive }) =>
                                    isActive ? isChildren ? 'container-menu-parent__child__active' : 'container-menu-item__active' : undefined
                                }
                            >
                                { item.label }
                            </NavLink>
                        </div>
                        {item?.open && item?.children && <div className={`container-menu-children ${isChildren ? 'container-menu-children__ischild' : ''}`}>
                            {<RenderItems items={item.children} isChildren={true} />}
                        </div>}
                    </div>
            )
        })
}

const Menu = ({items = [], handleClick}) => {
    return (
        <div className="container-menu">
            <RenderItems items={items} />
        </div>
    )
}

export default Menu;
