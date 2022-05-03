import { LOGIN, REGISTER, LOGOUT, USER_REGISTER_ERRORS, ACTIVATE, USER_LOGIN_ERRORS, USER_ACTIVATION_ERRORS} from "../constants";


const authReducer =(state ={userData: null, errors:{} }, action)=> {
    switch(action.type){
        case LOGIN:
            localStorage.setItem('profile', JSON.stringify({...action?.data}))
            return { ...state, userData: action.data,  };

case LOGOUT:
    localStorage.clear();
    return { ...state, userData: null, loading: false, errors: null };
case USER_REGISTER_ERRORS:
    return {errors: {...action.payload }}
case USER_ACTIVATION_ERRORS:
    return {errors: {...action.payload }}
case USER_LOGIN_ERRORS:
    return {errors: {...action.payload }}

    case REGISTER:
        return { ...state, userData: action.data}
    case ACTIVATE:
        return { ...state, userData: action.data,  errors: action.payload };
default:
    return state
    }
}

export default authReducer