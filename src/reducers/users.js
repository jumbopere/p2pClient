import { LOGIN, REGISTER, LOGOUT, USER_SIGNUP_ERRORS, ACTIVATE} from "../constants";


const authReducer =(state ={ userData: null, errors:{}}, action)=> {
    switch(action.type){
        case LOGIN:
            localStorage.setItem('profile', JSON.stringify({...action?.data}))
            return { ...state, userData: action.data, loading: false, errors: null };

case LOGOUT:
    localStorage.clear();
    return { ...state, userData: null, loading: false, errors: null };
case USER_SIGNUP_ERRORS:
    return {errors: {...action.payload }}
    case ACTIVATE:
        localStorage.setItem('profile', JSON.stringify({...action?.data}))
        return { ...state, userData: action.data, loading: false, errors: null };
default:
    return state
    }
}

export default authReducer