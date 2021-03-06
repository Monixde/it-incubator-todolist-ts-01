import React, {ChangeEvent} from 'react';
import s from './Profile.module.css';
import {Post, post} from "./Post/Post";
import {addPostActionCreator, updateNewPostChange} from "../../Redux/Reducer/ProfileReducer";
import {Button} from "@material-ui/core";
import {PostsType} from "../../Redux/Store";


export type ProfileProps = {
    addPost: ()=>void
    // addPost: (postText: string) => void
    updateNewChange: (value:string) => void
    post: Array<post>
    value: string

}


function Profile(props: ProfileProps) {




    let addPost = () => {


        props.addPost()



    }
    let updateNewChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let value =  e.currentTarget.value
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
                <Button onClick={addPost} variant={"contained"}  color={"primary"} > Send </Button>

            </div>
            {props.post}
        </div>
    );
}

export default Profile;
