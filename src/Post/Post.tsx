import s from "./Post.module.css";
import React from "react";

type post ={
    message: string

}

export function Post(props:post) {
    return (
        <div className={s.post}>
        <div>
            <img src={'https://picfiles.alphacoders.com/318/31834.jpg'}/>
    <span> like </span> "23"
    </div>
    <div> {props.message} </div>

    </div>
    );
}