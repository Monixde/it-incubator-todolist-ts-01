import {AddMessageType, DispatchType, MessageType, UpdateNewMessageType} from "../State";


const dialogsReducer = (state: any, action: DispatchType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: MessageType = {
                id: 1,
                message: state.newMessage,

            }
            state.message.push(newMessage)
            state.newMessage = ''
            return state


        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessage = action.value
            return state

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