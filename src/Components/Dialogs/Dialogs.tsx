import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {Dialog, PersonType} from "./Dialog/Dialog";
import {Messages, MessagesType} from "./messages/Messages";

type DialogProps = {

    dialog: Array<PersonType>
    message: Array<MessagesType>
}




export function Dialogs(props:DialogProps) {


    let dialogsElements = props.dialog.map( t => {
        return <Dialog
            name={t.name}
            id={t.id}
            route={`'/dialogs/'${t.id}`}
            />
    })

    let messagesElements = props.message.map( t => {
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
        </div>
    )
}