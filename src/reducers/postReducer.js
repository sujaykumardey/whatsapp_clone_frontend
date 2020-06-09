import {  ALL_USER }  from '../actions/types';

const initialState = {
  
};

export default function (state = initialState, action) {
  switch (action.type) {
       case ALL_USER:
         return{
            ...state,
            user:action.payload
         }         
      default:
      return state;
  }
}
