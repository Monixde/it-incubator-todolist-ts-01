import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'

import {Dialog, PersonType} from "./Dialog/Dialog";
import {Messages, MessagesType} from "./messages/Messages";
import {addMessageActionCreator, updateNewMessageChange} from "../../Redux/State";

type DialogProps = {

    dialog: Array<PersonType>
    message: Array<MessagesType>
    Dispatch: (action:object) => void
}


export function Dialogs(props: DialogProps) {



    const changeMessages = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let value = e.currentTarget.value
        if (value)

            props.Dispatch(updateNewMessageChange(value))

    }
    const addMessages = () => {


            props.Dispatch(addMessageActionCreator())

    }


    let dialogsElements = props.dialog.map(t => {
        return <Dialog
            key={t.id}
            name={t.name}
            id={t.id}
            route={`'/dialogs/'${t.id}`}
        />
    })

    let messagesElements = props.message.map(t => {
        return <Messages
            message={t.message}
            id={t.id}

        />
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>

                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea onChange={changeMessages}></textarea>
                <button onClick={addMessages}>Add</button>
            </div>
        </div>
    )
}