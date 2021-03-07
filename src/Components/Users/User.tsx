import React from "react";
import m from './User.module.css'
import {Button} from "@material-ui/core";
import axios from "axios";
import imageUser from '../../images/user.png'

export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed:boolean
    totalCount: number
    error:string

}
type AllUsersType = {

    state: Array<UserType>
    unFollowed: (userId: number) => void
    Followed: (userId: number) => void
    setUsers: (users: Array<any>) => void
}

export function User(props: AllUsersType) {
debugger
    if(props.state.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then( responze => {
            console.log(responze.data.items)
            props.setUsers( responze.data.items)
        })

         }



    return (<div>
        {
            props.state.map(u => <div key={u.id} className={m.user}>
                    <div>
                        <div>
                            <img src={ u.photos.large != null ? u.photos.large : imageUser}/>
                        </div>
                        <div>
                            {u.followed
                                ? <Button onClick={() =>

                                {
                                        props.Followed(u.id)
                                    }}

                                    variant={"contained"}
                                    color={"primary"}>
                                    Follow
                                </Button>
                                :

                                <Button onClick={() => {
                                        props.unFollowed(u.id)
                                    }}

                                    variant={"contained"}
                                    color={"primary"}>
                                    Unfollow
                                </Button>
                            }
                        </div>
                    </div>
                    <div className={m.userInfa}>
                        <div className={m.name}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{'u.country'}</div>
                            <div>{'u.city'}</div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>)

}
