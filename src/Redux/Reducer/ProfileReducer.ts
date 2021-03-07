import {AddPostType, DispatchType, PostsType, profilePageType, updateNewPostChangeType} from "../Store";

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
 const profileReducer = (state = initialState ,action:DispatchType):profilePageType => {



    switch (action.type) {
        case 'ADD-POST':
        const newPost: PostsType = {
            id: new Date().getTime(),
            message:state.newPosts,
            likeCount: 0
        }
             return {
                ...state,
                posts: [...state.posts, newPost],
                newPosts: ''
            }
        case 'UPDATE-NEW-POST-TEXT':

            return {
              ...state,
              newPosts: action.textChange
            }


        default:
            return state
    }

}


export const addPostActionCreator = (): AddPostType => {
    return {
        type: 'ADD-POST'
    }
}

export const updateNewPostChange = (value: string): updateNewPostChangeType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        textChange: value
    }
}
export default profileReducer;