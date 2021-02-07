import s from "../Dialogs.module.css";
import React from "react";

export type MessagesType = {
    message: string
    id: number
}

export function Messages(props: MessagesType) {
    return (
        <div className={s.messages}>
            <div className={s.message}> {props.message}</div>

        </div>
    )
}