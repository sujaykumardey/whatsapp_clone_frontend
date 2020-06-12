import { ALL_USER, ALL_CHAT,CURR_CHAT_ID } from './types';

export const userChat = (user) => (dispatch) => {
 
  fetch(`http://localhost:4000/api/chat/${user.id}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: ALL_CHAT,
        payload: data,
      }))
    .then(()=>{
      dispatch({
        type: CURR_CHAT_ID,
        payload: user,
      })
    })
};

export const getAllUser = (data) => (dispatch) => {
  dispatch({
    type: ALL_USER,
    payload: data,
  });
};
