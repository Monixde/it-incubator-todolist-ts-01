import React from "react";

import {User, UserType} from "./User";
import {connect} from "react-redux";

import {StoreReducerType} from "../../Redux/ReduxStore";
import {
    actionCreatorUserType,
    FollowedActionCreator,
    setUsersActionCreator,
    UnFollowedActionCreator
} from "../../Redux/Reducer/UserReducer";



type mapToUsersType = {
    state: Array<UserType>
}
type mapToDispatchType = {
    unFollowed: (userId: number) => void
    Followed: (userId: number) => void
    setUsers: (users: Array<any>) => void
}

function mapToUserState(state: StoreReducerType): mapToUsersType {
    return {
        state: state.users.users
    }
}

function mapToDispatchUsers(dispatch: (action: actionCreatorUserType) => void): mapToDispatchType {


    return {
        unFollowed: (userId: number) => {

            dispatch(UnFollowedActionCreator(userId))
        },
        Followed: (userId: number) => {
            dispatch(FollowedActionCreator(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

export const UsersContainer = connect<mapToUsersType, mapToDispatchType, {}, StoreReducerType>(mapToUserState, mapToDispatchUsers)(User)

