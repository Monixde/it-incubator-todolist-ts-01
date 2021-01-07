import React from 'react';
import './App.css';
import Menu from "./Menu/Menu";
import Header from "./Header/Header";
import Content from "./Content/Content";

function App() {
    return (
        <div className="App">
            <Header/>
            <Menu/>
            <Content/>
        </div>
    );
}

export default App;
