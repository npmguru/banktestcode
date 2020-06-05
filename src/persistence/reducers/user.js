  
import {AUTH_USER,AUTH_ERROR, AUTH_SIGNOUT} from '../../core/constant/app';

const INITIAL_STATE = {
    authentication:null,
    isUserLogin : false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case AUTH_USER : 
            return {...state,authentication:action.payload,isUserLogin:true};
        case AUTH_ERROR : 
            return {...state,authentication:action.payload,isUserLogin:false};
        case AUTH_SIGNOUT : 
            return INITIAL_STATE;    
        default:
            return state;

    }
}