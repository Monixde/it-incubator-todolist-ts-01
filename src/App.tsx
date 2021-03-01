import React from 'react';
import './App.css';
import Menu from "./Components/Menu/Menu";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {Music} from './Components/Music/Music';
import {Settings} from "./Components/Settings/Settings";
import store from "./Redux/State";

type StateType= {
    state: ()=>void
}



function App(props: StateType) {


    return (

        <div className="App">
            <Header/>
            <Menu/>
            <div className={"App_content"}>
                <Route path={'/Dialogs'} render={() => <Dialogs addMessage={store.addMessage} dialog={store._state.dialogs.dialog}
                                                                message={store._state.dialogs.message}/>}/>
                <Route path={'/Profile'}
                       render={() => <Profile value={store._state.profile.newPosts} onChange={store.updateNewPost} addPost={store.addPost.bind(store)}
                                              post={store._state.profile.posts}/>}/>
                <Route path={'/Music'} render={() => <Music/>}/>
                <Route path={'/Settings'} render={() => <Settings/>}/>


            </div>


        </div>

    );
}

export default App;
