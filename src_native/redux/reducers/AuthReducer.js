import {
    USERNAME_CHANGE,
    EMAIL_CHANGE,
    PASSWORD_CHANGE,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS
} from '../action/types'
const INITIAL_STATE = { username: 'dev', password: '123456',email: '',error:'', userData: []}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case USERNAME_CHANGE:
            return{...state,username: action.payload}
        case EMAIL_CHANGE:
            return{...state,email:action.payload}
        case PASSWORD_CHANGE:
            return{...state,password: action.payload}
        case LOGIN_SUCCESS:
            return {...state,INITIAL_STATE,userData: action.payload }
        case LOGIN_FAIL:
            return {...state,INITIAL_STATE,error: action.payload}
        case REGISTER_SUCCESS:
            return {...state,INITIAL_STATE}
        default:
            return state
    }
}