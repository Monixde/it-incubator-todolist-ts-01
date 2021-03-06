import {AddMessageType, dialogsPageType, DispatchType, MessageType, UpdateNewMessageType} from "../Store";

const initialState:dialogsPageType = {
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


const dialogsReducer = (state= initialState, action: DispatchType):dialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: MessageType = {
                id: 1,
                message: state.newMessage,

            }
            const newMessageText= {...state}
            newMessageText.message = [...state.message]
            newMessageText.dialog = [...state.dialog]

            newMessageText.message.push(newMessage)
            newMessageText.newMessage = ''
            return newMessageText


        case 'UPDATE-NEW-MESSAGE-TEXT':
            let newState = {...state}
            newState.newMessage = action.value
            return newState

        default:
            return state
    }
}
export const updateNewMessageChange = (value: string): UpdateNewMessageType => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        value: value
    }
}

export const addMessageActionCreator = (): AddMessageType => {
    return {
        type: 'ADD-MESSAGE'
    }
}


export default dialogsReducer;