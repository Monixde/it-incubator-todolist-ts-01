import {addPostActionCreator} from "./ProfileReducer";
import ProfileReducer from './ProfileReducer'
import {profilePageType} from "../Store";

test('profile',()=>{


    const initialState:profilePageType = {
        posts: [
            {id: 1, message: 'Привет', likeCount: 152},
            {id: 1, message: 'Как Жизнь молодая', likeCount: 122},
            {id: 1, message: 'Неплохо', likeCount: 12},
            {id: 1, message: 'А у тебя', likeCount: 13},
            {id: 1, message: 'Hello', likeCount: 12},
            {id: 1, message: 'Hello', likeCount: 132},
        ],
        newPosts: ''
    }
    const newmen = 'Привет'
    initialState.newPosts = newmen
    let stat = addPostActionCreator()
    let endState = ProfileReducer(initialState, stat )

    expect(endState.posts.length).toBe(7)
    expect(endState.posts[6].message).toBe('Привет')



})
