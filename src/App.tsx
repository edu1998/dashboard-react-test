import React from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import './App.css';
import CustomRouters from "./components/CustomRouters/CustomRouters";
import {ROUTER_DATA as dataRouters} from "./services/router-data";
import {Link} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import {MENU_ITEMS_DEFAULT as menuItems} from "./services/menu-item-default";


function App() {
    return (
        <div className="App">
            <Layout menuItems={menuItems}>
                <></>
                <h1>Welcome to React Router!</h1>

                <nav>
                        <Link to="/">Home </Link>
                        <Link to="/dash">Dash </Link>
                        <Link to="/dash/sales">Sales </Link>
                </nav>

                <br/><br/>

                <CustomRouters dataRouters={dataRouters}/>
            </Layout>
        </div>
    );
}

export default App;
