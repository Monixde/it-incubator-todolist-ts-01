import React from 'react';
import './App.css';
import Menu from "./Components/Menu/Menu";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import { Music } from './Components/Music/Music';
import {Settings} from "./Components/Settings/Settings";
import state from "./Redux/State";


function App() {




    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Menu/>
                <div className={"App_content"}>
                    <Route path={'/Dialogs'} render={ () => <Dialogs dialog={state.dialogs.dialog} message={state.dialogs.message} />} />
                    <Route path={'/Profile'} render={()=><Profile post={state.profile.posts} />} />
                    <Route path={'/Music'} render={()=><Music/>}/>
                    <Route path={'/Settings'} render={()=><Settings/>}/>


                </div>


            </div>
        </BrowserRouter>
    );
}

export default App;
