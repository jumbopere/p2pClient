import { LOGIN, REGISTER, USER_SIGNUP_ERRORS, ACTIVATE, ACTIVATION_FAILURE } from "../constants";
import * as api from '../api'

export const register = (values, navigate) => async (dispatch) => {
    try {
      const { data } = await api.register(values);
      
      dispatch({ type: REGISTER, data });
  
      navigate.push('/verify');
    } catch (err) {
        dispatch({
            type: USER_SIGNUP_ERRORS,
            payload: err.response.data,
          });
    }
  };

  export const verifyUser = (activationCode, navigate)=> async(dispatch)=> {
      try {
const {data} = await api.activate(activationCode)
dispatch({ type: ACTIVATE, data });
navigate('/home')
      }
      catch(err){
        dispatch({
            type: ACTIVATION_FAILURE,
            payload: err.response.data,
          });
      }
  }