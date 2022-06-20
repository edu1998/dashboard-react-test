import {useState} from "react";

import './Layout.css'

import {AiOutlineUp} from "react-icons/ai";


import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import NavbarForm from "./Navbar/NavbarForm/NavbarForm";
import Menu from "./Sidebar/Menu/Menu";
import {MENU_ITEMS_DEFAULT as menuItems} from "../../services/menu-item-default";



const Layout = ({children}) => {

    const [openSidebar, setOpenSidebar] =  useState(true);


    const menuSidebarClick = (items) => console.log(items);

    return (
            <div className="layout">
                <div className="layout-content-header">
                    <Navbar
                        title="alerce"
                        titleLogo={<AiOutlineUp size={50}/>}
                        subtitle="Nombre del producto"
                    >
                        <NavbarForm/>
                    </Navbar>
                </div>
                <div className="layout-content">
                    <div className={`layout-content-sidebar${!openSidebar ? '__close' : ''}`}>
                        <Sidebar status={openSidebar} onChangeStatus={() => setOpenSidebar(!openSidebar)}>
                            {openSidebar && <Menu items={menuItems} handleClick={menuSidebarClick}/>}
                        </Sidebar>
                    </div>
                    <div className="layout-content-body">
                        {children}
                    </div>
                </div>
            </div>
    )
}

export default Layout;
