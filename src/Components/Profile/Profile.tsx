import React, {ChangeEvent} from 'react';
import s from './Profile.module.css';
import {Post, post} from "./Post/Post";

export type ProfileProps = {
    post: Array<post>
    addPost: (postText: string) => void
    onChange: (newText: string) => void
    value: string

}

function Profile(props: ProfileProps) {


    let postsElements = props.post.map(p => {
            return <Post
                likeCount={p.likeCount}
                id={p.id}
                message={p.message}
            />
        }
    )


    let addPost = () => {


        props.addPost(props.value)


    }
    let updateNewChange = (e: ChangeEvent<HTMLTextAreaElement>) => props.onChange(e.currentTarget.value)


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
                <input onClick={addPost} type={"button"} value={"кнопка"}/>
            </div>
            {postsElements}
        </div>
    );
}

export default Profile;
