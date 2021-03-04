import {DispatchType, MessageType} from "../State";


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

export default dialogsReducer;