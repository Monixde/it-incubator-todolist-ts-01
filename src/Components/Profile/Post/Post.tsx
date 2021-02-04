import s from "./Post.module.css";
import React from "react";

export type post ={
    message: string
    id: number
    likeCount: number

}

export function Post(props:post) {
    return (
        <div className={s.post}>
        <div>
            <img src={'https://picfiles.alphacoders.com/318/31834.jpg'}/>
    <span> like </span> {props.likeCount}   </div>
    <div> {props.message} </div>

    </div>
    );
}