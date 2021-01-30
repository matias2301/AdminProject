import { 
    REGISTER_OK,
    REGISTER_ERROR,
    GET_USER,
    LOGIN_OK,
    LOGIN_ERROR,
    CLOSE_SESSION
 } from '../../types';

const authReducer = (state, action) => {
    switch (action.type){

        case LOGIN_OK:
        case REGISTER_OK:            
            localStorage.setItem('token', action.payload.token);
                        
            return {
                ...state,
                auth: true,
                message: null,
                loading: false
            }
        case LOGIN_ERROR:
        case REGISTER_ERROR:
        case CLOSE_SESSION:            
            localStorage.removeItem('token');
            return {
                ...state,
                auth: null,
                userLogged: null,
                token: null,
                loading: false,              
                message: action.payload
            }
        case GET_USER:
            return {
                ...state,
                auth: true,
                loading: false,
                userLogged: action.payload
            }
        default:
            return state;
    }
}

export default authReducer;