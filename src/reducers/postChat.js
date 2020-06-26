import { ALL_CHAT, ALL_CHATS, ALL_EXIT } from '../actions/types';

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
    case ALL_EXIT:
      return {
        ...(state = undefined),
      };

    default:
      return state;
  }
}
