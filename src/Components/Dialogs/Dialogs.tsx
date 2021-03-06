import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'

import {Dialog, PersonType} from "./Dialog/Dialog";
import {Messages, MessagesType} from "./messages/Messages";

import {Button} from "@material-ui/core";


type DialogProps = {

    addMessage: () => void
    changeMessage: (value: string) => void
    dialog: Array<PersonType>
    message: Array<MessagesType>
    value: string
}


export function Dialogs(props: DialogProps) {

    let dialogsElements = props.dialog.map((t: { id: number; name: string; }) => {
        return <Dialog
            key={t.id}
            name={t.name}
            id={t.id}
            route={`'/dialogs/'${t.id}`}
        />
    })

    let messagesElements = props.message.map((t: { message: string; id: number; }) => {
        return <Messages
            message={t.message}
            id={t.id}

        />
    })

    const changeMessages = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let value = e.currentTarget.value
        if (value)

            props.changeMessage(value)

    }
    const addMessages = () => {


        props.addMessage()

    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>

                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea onChange={changeMessages} value={props.value}></textarea>

                <Button onClick={addMessages} variant={"contained"} color={"primary"}> Add </Button>
            </div>
        </div>
    )
}