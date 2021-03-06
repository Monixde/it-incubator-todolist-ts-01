import React, {ChangeEvent} from 'react';
import s from './Profile.module.css';
import {Post, post} from "./Post/Post";
import {addPostActionCreator, updateNewPostChange} from "../../Redux/Reducer/ProfileReducer";
import {Button} from "@material-ui/core";
import Profile from "./Profile";
import {StoreType} from "../../Redux/Store";


export type ProfileContainerProps = {
    store: any

}


export function ProfileContainer(props: ProfileContainerProps) {

    const state = props.store.getState()

    let postsElements = state.profile.posts.map((p:post) => {
            return <Post
                likeCount={p.likeCount}
                id={p.id}
                message={p.message}
            />
        }
    )


    let addPost = () => {


        props.store.dispatch(addPostActionCreator())



    }
    let updateNewChange = (value:string) => {

            props.store.dispatch(updateNewPostChange(value))
    }


    return (
        <div className={s.con}>
            <Profile addPost={addPost} updateNewChange={updateNewChange} post={postsElements} value={state.profile.newPosts}/>
        </div>
    );
}


