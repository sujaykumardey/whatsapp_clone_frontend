import {
  ALL_USER,
  ALL_CHAT,
  CURR_CHAT_ID,
  USER_REGISTRATION,
  USER_SIGNIN,
} from './types';
import {
  RegistrationUser,
  signinUser,
  mediafileUpload,
  imagefileUpload,
} from '../endpoints/API';

const { api } = require('../endpoints/API');

export const userChat = (user, token) => (dispatch) => {
  fetch(`${api}/api/chat/${user.id}`, {
    method: 'GET',
    headers: {
      'x-auth-token': `${token}`,
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: ALL_CHAT,
        payload: data,
      })
    )
    .then(() => {
      dispatch({
        type: CURR_CHAT_ID,
        payload: user,
      });
    });
};

export const userRegistration = (data) => (dispatch) => {
  RegistrationUser(data).then((user) => {
    dispatch({
      type: USER_REGISTRATION,
      payload: user,
    });
  });
};

export const userSignin = (data) => (dispatch) => {
  signinUser(data).then((user) => {
    dispatch({
      type: USER_SIGNIN,
      payload: user,
    });
  });
};

export const getAllUser = (data) => (dispatch) => {
  dispatch({
    type: ALL_USER,
    payload: data,
  });
};

export const mediaFileUpload = (data) => {
  mediafileUpload(data).then((user) => (dispatch) => {
    dispatch({
      type: ALL_CHAT,
      payload: user,
    });
  });
};

export const imageFileUpload = (data) => {
  imagefileUpload(data).then((user) => (dispatch) => {
    dispatch({
      type: ALL_CHAT,
      payload: user,
    });
  });
};
