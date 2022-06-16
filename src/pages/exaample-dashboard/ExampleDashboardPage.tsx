import Sidebar from "../../components/sidebar/Sidebar";
import Page from "../../components/Page/Page";
import React from "react";
import './ExampleDashboardPage.css'
import {Outlet} from 'react-router-dom'

function ExampleDashboardPage() {
    return (
        <div className="page">
            <Sidebar/>
            <div className="page_content">
                <Outlet/>
                <Page/>
            </div>
        </div>
    );
}

export default ExampleDashboardPage;
