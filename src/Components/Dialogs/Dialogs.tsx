import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'

import {PersonType} from "./Dialog/Dialog";
import {MessagesType} from "./messages/Messages";

import {Button} from "@material-ui/core";


type DialogProps = {

    addMessage: () => void
    changeMessage: (value: string) => void
    dialog: Array<PersonType>
    message: Array<MessagesType>
    value: string
}


export function Dialogs(props: DialogProps) {


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

                {props.dialog}
            </div>
            <div className={s.messages}>
                {props.message}
            </div>
            <div>
                <textarea onChange={changeMessages} value={props.value}></textarea>

                <Button onClick={addMessages} variant={"contained"} color={"primary"}> Add </Button>
            </div>
        </div>
    )
}