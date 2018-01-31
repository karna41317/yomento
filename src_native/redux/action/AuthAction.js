import axios from 'axios'
import {
    USERNAME_CHANGE,
    EMAIL_CHANGE,
    PASSWORD_CHANGE,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from './types'
import * as API_CONST from '../../../services/apiConstant'
import {AsyncStorage} from 'react-native'

// login Url
const LOGIN_URL = "http://192.168.200.34:3000/login"
const REGISTER_URL = "http://192.168.200.34:3000/register"


export const usernameChanged = (text) => {
    return{
        type: USERNAME_CHANGE,
        payload: text
    }
}

export const emailChanged = (text) =>{
    return{
        type: EMAIL_CHANGE,
        payload: text
    }
}

export const passwordChanged = (text) =>{
    return{
        type: PASSWORD_CHANGE,
        payload: text
    }
}


// register action
export const registerUser = (username,email,password,navigation) => {
    return dispatch => {
        axios.post(API_CONST.baseUrl+API_CONST.register,{
            username: username,
            email: email,
            password: password
        })
            .then((response) => {
                if(response.data){
                   // loginDone(dispatch,response)
                    navigation.navigate('NEWS')
                }})
            .catch((error) => console.warn('Something Went wrong!!!'))
    }
}
// login action
export const userLogin = (username,password,navigation) => {
    return dispatch => {
        axios.post(API_CONST.baseUrl+API_CONST.login,{
            username: username,
            password: password
        })
            .then((response) => {
                if(response.data.length > 0){
                    loginDone(dispatch,response)
                  //  AsyncStorage.setItem('uid',response.data._id,(res)=> {})
                    navigation.navigate('NEWS')
                }else{
                    loginFail(dispatch,response)
                }})
            .catch((response) => loginFail(dispatch,response))
    }
}

const loginDone = (dispatch,response) =>{
    dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data
    })
}

const loginFail = (dispatch, response) =>{
    dispatch({
        type: LOGIN_FAIL,
        payload: (response.message) ? response.message : 'Invalid Login'
    })
}
