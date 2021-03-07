import React from 'react';
import './App.css';
import Menu from "./Components/Menu/Menu";
import Header from "./Components/Header/Header";

import {Route} from 'react-router-dom';
import {Music} from './Components/Music/Music';
import {Settings} from "./Components/Settings/Settings";


import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {ProfileContainer} from "./Components/Profile/ProfileContainer";

import {UsersContainer} from "./Components/Users/UsersContainer";



function App() {


    return (

        <div className="App">
            <Header/>
            <Menu/>
            <div className={"App_content"}>
                <Route path={'/Dialogs'} render={() =>
                    <DialogsContainer
                    />}
                />
                <Route path={'/Profile'} render={() =>
                    <ProfileContainer
                    />}
                />
                <Route path={'/Music'} render={() => <Music/>}/>

                <Route path={'/Users'} render={() => <UsersContainer/>}/>
                <Route path={'/Settings'} render={() => <Settings/>}/>


            </div>


        </div>

    );
}

export default App;
