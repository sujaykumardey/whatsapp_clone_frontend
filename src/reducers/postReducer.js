import {  ALL_USER,ADD_ADMIN }  from '../actions/types';

const initialState = {
  
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ADMIN:
      return{
         ...state,
         admin:action.payload
      }    

       case ALL_USER:
         return{
            ...state,
            user:action.payload
         }         
      default:
      return state;
  }
}
