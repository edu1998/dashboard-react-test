import {useState} from "react";

import './Layout.css'

import {AiOutlineUp} from "react-icons/ai";
import {BsHouseDoorFill} from "react-icons/bs";
import {IoIosRocket} from "react-icons/io";


import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import NavbarForm from "./Navbar/NavbarForm/NavbarForm";
import Menu from "./Sidebar/Menu/Menu";



const Layout = ({children}) => {
    const [openSidebar, setOpenSidebar] =  useState(true);

    const items = [
        {
            label: 'Mis Productos',
            icon: BsHouseDoorFill,
        },
        {
            label: 'Maestros',
            icon: IoIosRocket,
        },
        {
            label: 'Ingreso Paquetes',
            icon: IoIosRocket,
            active: true,
        },
        {
            label: 'Gestion De Repartos',
            icon: IoIosRocket,
        },
        {
            label: 'Control de Repartos',
            icon: IoIosRocket,
        },
        {
            label: 'Servicio de usuarios',
            icon: IoIosRocket,
        }
    ]
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
                            {openSidebar && <Menu items={items}/>}
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
