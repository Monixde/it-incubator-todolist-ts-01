let rerenderTree = () => {

}

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
let state: rootStateType = {
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
}


export const addPost = () => {


    const newPost: PostsType = {
        id: new Date().getTime(),
        message: state.profile.newPosts,
        likeCount: 0
    }
    state.profile.posts.push(newPost)
    state.profile.newPosts = ''

    rerenderTree()

}

export const addMessage = (messageText: string) => {


    const newMessage: MessageType = {
        id: new Date().getTime(),
        message: messageText

    }
    state.dialogs.message.push(newMessage)
    rerenderTree()


    console.log(state.dialogs.message)
}

export const updateNewPost = (textChange: string) => {
    state.profile.newPosts = textChange
    rerenderTree()
}
export const observer = (lithen: ()=>void) => {
    rerenderTree = lithen
}

export default state;