import React from 'react';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Card from "./components/card/Card";
import CardHeader from "./components/card/cardHeader/Card/cardHeader";
import CardBody from "./components/card/cardBody/Card/cardBody";
import Page from "./components/Page/Page";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Sidebar/>
        <div className="page_content">
            <Page/>
        </div>
      </div>
    </div>
  );
}

export default App;
