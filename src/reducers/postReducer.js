import {
  ALL_USER,
  ADD_ADMIN,
  CURR_CHAT_ID,
  USER_REGISTRATION,
  USER_SIGNIN,
  ALL_EXIT,
  USER_PROFILE,
} from '../actions/types';
import storage from 'redux-persist/lib/storage';
const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_REGISTRATION:
      return {
        ...state,
        regis: action.payload,
      };
    case ADD_ADMIN:
      return {
        ...state,
        admin: action.payload,
      };
    case USER_PROFILE:
      if (state.admin_id._id === action.payload._id) {
        state.admin_id.url = action.payload.url;
      }
      state.user = state.user.map((obj) => {
        if (obj._id === action.payload._id) {
          obj = action.payload;
        }
        return obj;
      });

      return {
        ...state,
      };
    case USER_SIGNIN:
      return {
        ...state,
        admin_id: action.payload,
      };

    case ALL_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CURR_CHAT_ID:
      return {
        ...state,
        current_id: action.payload,
      };
    case ALL_EXIT:
      storage.removeItem('persist:root');
      return {
        ...(state = undefined),
      };
    default:
      return state;
  }
}
