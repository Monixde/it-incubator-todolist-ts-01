




type MessageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
    route: string

}
export type PostsType = {
    id: number
    message: string
    likeCount: number
}
type profilePageType = {
    posts: Array<PostsType>
    newPosts: string

}
type dialogsPageType = {
    dialog: Array<DialogType>
    message: Array<MessageType>
}
export type rootStateType = {
    profile: profilePageType
    dialogs: dialogsPageType
}


let store  = {
    _state:  {
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
            ]
        }
    },
    getState (){
        this._state
    },
    rerenderTree  ()  {
    },
    addPost  ()  {


        const newPost: PostsType = {
            id: new Date().getTime(),
            message: this._state.profile.newPosts,
            likeCount: 0
        }
        this._state.profile.posts.push(newPost)
        this._state.profile.newPosts = ''

        this.rerenderTree()

    },
    updateNewPost (textChange: string)  {
        this._state.profile.newPosts = textChange
        this.rerenderTree()
    },
    observer (lithen: ()=>void) {
        this.rerenderTree = lithen
    },
    addMessage (messageText: string) {


        const newMessage: MessageType = {
            id: new Date().getTime(),
            message: messageText

        }
        this._state.dialogs.message.push(newMessage)
        this.rerenderTree()



    }
}






export default store;