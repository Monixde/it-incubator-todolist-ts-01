import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type PersonType = {
    name: string
    id: number
    route: string

}

export function Dialog (props: PersonType) {

    return (
            <div className={s.dialog}>
                <NavLink to={props.route}> {props.name}</NavLink>
            </div>


    )
}