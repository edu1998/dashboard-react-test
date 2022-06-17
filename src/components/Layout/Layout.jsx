import {useState} from "react";
import './Layout.css'
import Navbar from "./Navbar/Navbar";
import {AiOutlineUp} from "react-icons/ai";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({children}) => {
    const [openSidebar, setOpenSidebar] =  useState(true);
    return (
            <div>
                <div className="layout-content-header">
                    <Navbar
                        title="alerce"
                        titleLogo={<AiOutlineUp size={50}/>}
                    />
                </div>
                <div className="layout-content">
                    <div className={`layout-content-sidebar${!openSidebar ? '__close' : ''}`}>
                        <Sidebar status={openSidebar} onChangeStatus={() => setOpenSidebar(!openSidebar)}/>
                    </div>
                    <div className="layout-content-body">
                        {children}
                    </div>
                </div>
            </div>
    )
}

export default Layout;
