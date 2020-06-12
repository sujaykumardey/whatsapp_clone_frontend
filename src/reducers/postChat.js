import { ALL_CHAT, ALL_CHATS } from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case ALL_CHAT:
      return {
        ...state,
        chat: action.payload,
      };
    case ALL_CHATS:
      return {
        ...state,
        chat: action.payload,
      };

    default:
      return state;
  }
}
