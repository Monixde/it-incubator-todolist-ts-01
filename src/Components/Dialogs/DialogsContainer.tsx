import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'

import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./messages/Messages";
import {addMessageActionCreator, updateNewMessageChange} from "../../Redux/Reducer/DialogsReducer";

import {Dialogs} from "./Dialogs";



type DialogsContainerProps = {
    store: any
    /*dialog: Array<PersonType>
    message: Array<MessagesType>
    Dispatch: (action:object) => void*/
}


export function DialogsContainer(props: DialogsContainerProps) {

    const state = props.store.getState()

    const changeMessages = (value:string) => {

        if (value)

           props.store.dispatch(updateNewMessageChange(value))

    }
    const addMessages = () => {


            props.store.dispatch(addMessageActionCreator())

    }


    let dialogsElements = state.dialogs.dialog.map((t: { id: number; name: string; }) => {
        return <Dialog
            key={t.id}
            name={t.name}
            id={t.id}
            route={`'/dialogs/'${t.id}`}
        />
    })

    let messagesElements = state.dialogs.message.map((t: { message: string; id: number; }) => {
        return <Messages
            message={t.message}
            id={t.id}

        />
    })

    return (
        <div className={s.dialogs}>
           <Dialogs
               value={state.dialogs.newMessage}
               addMessage={addMessages}
               changeMessage={changeMessages}
               dialog={dialogsElements}
               message={messagesElements}
           />
        </div>
    )
}