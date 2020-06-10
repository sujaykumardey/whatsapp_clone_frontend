import {combineReducers} from 'redux'
import userChat from './postReducer';
import chat from './postChat';



export default combineReducers({
    userchat:userChat,
    chats:chat
    
})
