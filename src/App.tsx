import React from 'react';
import './App.css';
import CustomRouters from "./components/CustomRouters/CustomRouters";
import {ROUTER_DATA as dataRouters} from "./services/router-data";
import {Link} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <h1>Welcome to React Router!</h1>

            <nav>
                    <Link to="/">Home </Link>
                    <Link to="/dash">Dash </Link>
                    <Link to="/dash/sales">Sales </Link>
            </nav>

            <br/><br/>

            <CustomRouters dataRouters={dataRouters}/>

        </div>
    );
}

export default App;
