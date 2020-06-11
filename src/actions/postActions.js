import { ALL_USER, ALL_CHAT } from './types';

export const userChat = (id) => (dispatch) => {
 
  fetch(`http://localhost:4000/api/chat/${id}`, {
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
      })
    );
};

export const getAllUser = (data) => (dispatch) => {
  dispatch({
    type: ALL_USER,
    payload: data,
  });
};
