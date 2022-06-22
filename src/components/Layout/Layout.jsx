import {useState} from "react";

import './Layout.css'

import {AiOutlineUp} from "react-icons/ai";


import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import NavbarForm from "./Navbar/NavbarForm/NavbarForm";
import Menu from "./Sidebar/Menu/Menu";



const Layout = ({children, menuItems}) => {

    const [openSidebar, setOpenSidebar] =  useState(true);


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
                            {openSidebar && <Menu items={menuItems} />}
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
