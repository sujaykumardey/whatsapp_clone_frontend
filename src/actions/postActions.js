import {
  ALL_USER
} from './types';
import {socket} from '../Components/Signin'

// export const getAllUser = () => (dispatch) => {
//   socket.on('users_detail',(user) => {
//     console.log(user)
//     dispatch({
//       type: ALL_USER,
//       payload: user,
//     });
//   });
// };

export const getAllUser=(data)=>(dispatch)=>{
  dispatch({
          type: ALL_USER,
          payload: data,
        });
}

