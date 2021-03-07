import profileReducer from "./Reducer/ProfileReducer";
import dialogsReducer from "./Reducer/DialogsReducer";

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
    route: string

}
export type PostsType = {
    id: number
    message: string
    likeCount: number
}
export type profilePageType = {
    posts: Array<PostsType>
    newPosts: string

}
export type dialogsPageType = {
    dialog: Array<DialogType>
    message: Array<MessageType>
    newMessage: string
}
export type rootStateType = {
    profile: profilePageType
    dialogs: dialogsPageType
}
export type StoreType = {
    _state: rootStateType
    getState: () => rootStateType
    _rerenderTree: () => void
    addPost: (postText: string) => void
    updateNewPost: (textChange: string) => void
    subscribe: (lithen: () => void) => void
    addMessage: (messageText: string) => void
    dispatch: (action: any) => void
}

export type AddPostType = {
    type: 'ADD-POST'
}
export type updateNewPostChangeType = {
    type: 'UPDATE-NEW-POST-TEXT'
    textChange: string
}
export type AddMessageType = {
    type:'ADD-MESSAGE'
}
export type UpdateNewMessageType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    value:string
}
type FollowedActionCreatorType ={
    type: 'CHANGE-FOLLOWED'
    userId:number
}
type UnFollowedActionCreatorType = {
    type: 'CHANGE-UNFOLLOWED'
    userId:number
}

export type DispatchType = AddPostType | updateNewPostChangeType | UpdateNewMessageType | AddMessageType | UnFollowedActionCreatorType| FollowedActionCreatorType

let store: StoreType = {
    _state: {
        profile: {
            posts: [
                {id: 1, message: 'Привет', likeCount: 152},
                {id: 1, message: 'Как Жизнь молодая', likeCount: 122},
                {id: 1, message: 'Неплохо', likeCount: 12},
                {id: 1, message: 'А у тебя', likeCount: 13},
                {id: 1, message: 'Hello', likeCount: 12},
                {id: 1, message: 'Hello', likeCount: 132},
            ],
            newPosts: ''
        },
        dialogs: {
            dialog: [
                {id: 1, name: 'Даник', route: '2'},
                {id: 1, name: 'Артем', route: '1'},
                {id: 1, name: 'Оля', route: '3'},
                {id: 1, name: 'Гриша', route: '4'},
                {id: 1, name: 'Максим', route: '5'},
                {id: 1, name: 'Hello', route: '6'},
            ],

            message: [
                {id: 1, message: 'What',},
                {id: 1, message: 'You',},
                {id: 1, message: 'Doing',},
                {id: 1, message: 'Now',},
                {id: 1, message: 'Hello',},
                {id: 1, message: 'My friend',},
            ],
            newMessage: ''
        }
    },
    getState() {
        return this._state
    },
    _rerenderTree() {
    },
    updateNewPost(textChange: string) {

        this._state.profile.newPosts = textChange
        this._rerenderTree()
    },
    addPost() {


        const newPost: PostsType = {
            id: new Date().getTime(),
            message: this._state.profile.newPosts,
            likeCount: 0
        }
        this._state.profile.posts.push(newPost)
        this._state.profile.newPosts = ''
        this._rerenderTree()

    },

    subscribe(lithen) {
        this._rerenderTree = lithen
    },
    addMessage(messageText: string) {


        const newMessage: MessageType = {
            id: new Date().getTime(),
            message: messageText

        }
        this._state.dialogs.message.push(newMessage)
        this._rerenderTree()


    },
    dispatch(action: DispatchType) {
        this._state.profile = profileReducer(this._state.profile, action)
        this._state.dialogs = dialogsReducer(this._state.dialogs, action)
        this._rerenderTree()

    }
}


export default store;
// @ts-ignore
