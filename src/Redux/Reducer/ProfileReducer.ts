import {AddPostType, DispatchType, PostsType, profilePageType, updateNewPostChangeType} from "../State";


 const profileReducer = (state:profilePageType,action:DispatchType) => {
    switch (action.type) {
        case 'ADD-POST':

        const newPost: PostsType = {
            id: new Date().getTime(),
            message:state.newPosts,
            likeCount: 0
        }
        state.posts.push(newPost)
        state.newPosts = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':

            state.newPosts = action.textChange
            return state


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