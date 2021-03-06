import React, {ChangeEvent} from 'react';
import s from './Profile.module.css';
import {Post, post} from "./Post/Post";
import {Button} from "@material-ui/core";
import {PostsType} from "../../Redux/Store";


export type ProfileProps = {
    addPost: () => void
    updateNewChange: (value: string) => void
    post: Array<PostsType>
    value: string

}

function Profile(props: ProfileProps) {

    let postsElements = props.post.map((p: post) => {
            return <Post
                likeCount={p.likeCount}
                id={p.id}
                message={p.message}
            />
        }
    )


    let addPost = () => {

        props.addPost()

    }
    let updateNewChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let value = e.currentTarget.value
        props.updateNewChange(value)
    }


    return (
        <div className={s.con}>
            <div><img src={'https://images.by.prom.st/94678845_w640_h640_burenie-skvazhin-na.jpg'}/></div>
            <div className={s.person}>
                <div><img
                    src={'https://million-wallpapers.ru/wallpapers/5/51/455458761658281/avatar-2-nejtiri-2017.jpg'}/>
                </div>
                <div>данные</div>
            </div>
            <div>
                <textarea onChange={updateNewChange} value={props.value}/>
            </div>
            <div>
                <Button onClick={addPost} variant={"contained"} color={"primary"}> Send </Button>

            </div>
            {postsElements}
        </div>
    );
}

export default Profile;
