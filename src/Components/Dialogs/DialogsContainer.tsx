import React from "react";
import {PersonType} from "./Dialog/Dialog";
import {MessagesType} from "./messages/Messages";
import {addMessageActionCreator, updateNewMessageChange} from "../../Redux/Reducer/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StoreReducerType} from "../../Redux/ReduxStore";


type mapDispatch = {
    changeMessage: (value: string) => void
    addMessage: () => void
}


type mapStateDialogsType = {
    dialog: Array<PersonType>
    message: Array<MessagesType>
    value: string
}

function mapStateDialogs(state: StoreReducerType): mapStateDialogsType {
    return {
        dialog: state.dialogs.dialog,
        message: state.dialogs.message,
        value: state.dialogs.newMessage
    }
}

function mapToDispatch(dispatch: (action: any) => void): mapDispatch {
    return {
        changeMessage: (value: string) => {
            dispatch(updateNewMessageChange(value))

        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

export const DialogsContainer = connect<mapStateDialogsType, mapDispatch, {}, StoreReducerType>(mapStateDialogs, mapToDispatch)(Dialogs)