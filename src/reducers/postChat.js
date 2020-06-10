import {  ALL_CHAT }  from '../actions/types';

const initialState = {
  
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ALL_CHAT:
      
      return{
         ...state,
         chat:action.payload
      }    
        
      default:
      return state;
  }
}