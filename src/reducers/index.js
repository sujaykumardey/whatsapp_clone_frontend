import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import userChat from './postReducer';
import chat from './postChat';


const persistConfig={
    key:'root',
    storage,
    whitelist:['userchat','chats']
}




const rootReducer=combineReducers({
        userchat:userChat,
        chats:chat
        
    })

export default persistReducer(persistConfig,rootReducer);

