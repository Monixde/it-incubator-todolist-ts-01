import {UserType} from "../../Components/Users/User";

type InitialUserType = {
    users: Array<UserType>
}
type FollowedActionCreatorType = {
    type: 'CHANGE-FOLLOWED'
    userId: number
}
type UnFollowedActionCreatorType = {
    type: 'CHANGE-UNFOLLOWED'
    userId: number
}
type SetUsersActionCreatorType = {
    type: 'SET-USERS'
    users: Array<any>
}
export type actionCreatorUserType = UnFollowedActionCreatorType | FollowedActionCreatorType | SetUsersActionCreatorType
const initialState: InitialUserType = {
    users: [
        /* {
             id: 1,
             followed: true,
             name: 'Дмитрий Дробов',
             status: 'hello',
             country: 'Belarus',
             city: 'Oktyabrsky/Minsk/Rudensk',
             img: 'https://venitatkani.by/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdmVuaXRhdGthbmkuYnklMkZ3cC1jb250ZW50JTJGdXBsb2FkcyUyRjIwMjAlMkYwNyUyRnFyM29uajJ3MXJtLTIuanBnJmNhY2hlTWFya2VyPTE1OTYwNTY2NDItMzk2NTA1JnRva2VuPTcyY2Q5MWE1ZWUzOTU1NGU.q.jpg'
         },
         {
             id: 2,
             followed: false,
             name: 'Даник Дробов',
             status: 'Готовится к школе',
             country: 'Belarus',
             city: 'Minsk/Rudensk',
             img: 'https://venitatkani.by/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdmVuaXRhdGthbmkuYnklMkZ3cC1jb250ZW50JTJGdXBsb2FkcyUyRjIwMjAlMkYwNyUyRnFyM29uajJ3MXJtLTIuanBnJmNhY2hlTWFya2VyPTE1OTYwNTY2NDItMzk2NTA1JnRva2VuPTcyY2Q5MWE1ZWUzOTU1NGU.q.jpg'
         },
         {
             id: 3,
             followed: false,
             name: 'Максим Бортник',
             status: 'Фанат Влада А4',
             country: 'Belarus',
             city: 'Minsk/Novinki',
             img: 'https://venitatkani.by/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGdmVuaXRhdGthbmkuYnklMkZ3cC1jb250ZW50JTJGdXBsb2FkcyUyRjIwMjAlMkYwNyUyRnFyM29uajJ3MXJtLTIuanBnJmNhY2hlTWFya2VyPTE1OTYwNTY2NDItMzk2NTA1JnRva2VuPTcyY2Q5MWE1ZWUzOTU1NGU.q.jpg'
        }*/

    ]
}

const usersReducer = (state:InitialUserType = initialState, action: actionCreatorUserType):InitialUserType => {


    switch (action.type) {
        case 'CHANGE-UNFOLLOWED':
            return {
                ...state,
                users: state.users.map(t => {
                    if (t.id === action.userId) {
                        return {
                            ...t,
                            followed: true
                        }

                    }
                    return t;
                })
            }

        case "CHANGE-FOLLOWED":
            return {
                ...state,
                users: state.users.map(t => {
                    if (t.id === action.userId) {
                        return {
                            ...t,
                            followed: false
                        }

                    }
                    return t;
                })
            }
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state
    }
}

export const FollowedActionCreator = (userId: number): FollowedActionCreatorType => {
    return {
        type: 'CHANGE-FOLLOWED',
        userId
    }
}
export const UnFollowedActionCreator = (userId: number): UnFollowedActionCreatorType => {
    return {
        type: 'CHANGE-UNFOLLOWED',
        userId

    }
}
export const setUsersActionCreator = (users: Array<any>): SetUsersActionCreatorType => {
    return {
        type: 'SET-USERS',
        users
    }
}


export default usersReducer;