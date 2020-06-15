import { ALL_USER, ALL_CHAT,CURR_CHAT_ID,USER_REGISTRATION,USER_SIGNIN } from './types';
import {
  RegistrationUser,signinUser
  } from '../endpoints/API';

const {api}=require('../endpoints/API')




export const userChat = (user) => (dispatch) => {
   fetch(`${api}/api/chat/${user.id}`)
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

export const userRegistration = (data) => (dispatch) => {
  RegistrationUser(data).then((user) => {
    console.log(user)
    dispatch({
      type: USER_REGISTRATION,
      payload: user,
    });
  });
};


export const userSignin = (data) => (dispatch) => {
  signinUser(data).then((user) => {
    console.log(user)
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
