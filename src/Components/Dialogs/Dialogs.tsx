import React from "react";
import s from './Dialogs.module.css'

import {Dialog, PersonType} from "./Dialog/Dialog";
import {Messages, MessagesType} from "./messages/Messages";

type DialogProps = {

    dialog: Array<PersonType>
    message: Array<MessagesType>
    addMessage: (messageText: string) => void
}


export function Dialogs(props: DialogProps) {


    let newMessage = React.createRef<HTMLTextAreaElement>()
    const addMessages = () => {
        if (newMessage.current)
            props.addMessage(newMessage.current.value)

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
                <textarea ref={newMessage}></textarea>
                <button onClick={addMessages}>Add</button>
            </div>
        </div>
    )
}