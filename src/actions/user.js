import { LOGIN, REGISTER, USER_REGISTER_ERRORS, ACTIVATE, USER_ACTIVATION_ERRORS, USER_LOGIN_ERRORS } from "../constants";
import * as api from '../api'

export const registerUser = (values, navigate) => async (dispatch) => {
    try {
      const { data } = await api.register(values);
      
      dispatch({ type: REGISTER, data });
  
      navigate('/activate');
    } catch (err) {
        dispatch({
            type: USER_REGISTER_ERRORS,
            payload: err.response.data,
          });
        console.log(err)
    }
  };

  export const activateUser = (activationCode, navigate)=> async(dispatch)=> {
      try {
const {data} = await api.activate(activationCode)
dispatch({ type: ACTIVATE, data });
navigate('/login')
      }
      catch(err){
        dispatch({
            type: USER_ACTIVATION_ERRORS,
            payload: err.response.data,
          });
      }
  }

  export const loginUser =(values, navigate)=> async(dispatch)=> {
    try{
const {data} = await api.login(values)
dispatch({type:LOGIN, data})
navigate('/login')
    }catch(error){
      dispatch({
        type: USER_LOGIN_ERRORS,
        payload: error.response.data
      })
    }
  }