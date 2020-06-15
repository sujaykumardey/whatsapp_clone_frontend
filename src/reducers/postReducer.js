import { ALL_USER, ADD_ADMIN, CURR_CHAT_ID,USER_REGISTRATION,USER_SIGNIN } from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_REGISTRATION:
      return{
        ...state,
        regis:action.payload
      }
    case ADD_ADMIN:
      return {
        ...state,
        admin: action.payload,
      };
    case USER_SIGNIN:
        return {
          ...state,
          admin: action.payload,
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
    default:
      return state;
  }
}
