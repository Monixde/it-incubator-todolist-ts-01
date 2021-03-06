import React from 'react';

import {addPostActionCreator, updateNewPostChange} from "../../Redux/Reducer/ProfileReducer";

import Profile, {ProfileProps} from "./Profile";
import {PostsType} from "../../Redux/Store";
import {connect, ConnectedComponent} from "react-redux";
import {StoreReducerType} from "../../Redux/ReduxStore";


export type MapToState = {
    post: Array<PostsType>
    value: string

}
type MapToDispatch = {
    addPost: () => void
    updateNewChange: (value: string) => void
}


const mapToState = (state: StoreReducerType): MapToState => {
    return {
        post: state.profile.posts,
        value: state.profile.newPosts
    }
}
const mapToDispatch = (dispatch: (action: any) => void): MapToDispatch => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewChange: (value: string) => {
            dispatch(updateNewPostChange(value))
        }
    }
}


export const ProfileContainer = connect<MapToState, MapToDispatch, {}, StoreReducerType>(mapToState, mapToDispatch)(Profile)
