import React from 'react';
import './App.css';
import Menu from "./Components/Menu/Menu";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {Music} from './Components/Music/Music';
import {Settings} from "./Components/Settings/Settings";
import {StoreType} from "./Redux/State";

type StateType = {
    state: StoreType
}


function App(props: StateType) {


    return (

        <div className="App">
            <Header/>
            <Menu/>
            <div className={"App_content"}>
                <Route path={'/Dialogs'} render={() =>
                    <Dialogs
                        addMessage={props.state.addMessage.bind(props.state)}
                        dialog={props.state._state.dialogs.dialog}
                        message={props.state._state.dialogs.message}
                    />}
                />
                <Route path={'/Profile'} render={() =>
                    <Profile value={props.state._state.profile.newPosts}
                             Dispatch={props.state.dispatch.bind(props.state)}
                             /*addPost={props.state.dispatch.bind(props.state)}*/
                             post={props.state._state.profile.posts}
                    />}
                />
                <Route path={'/Music'} render={() => <Music/>}/>
                <Route path={'/Settings'} render={() => <Settings/>}/>


            </div>


        </div>

    );
}

export default App;
