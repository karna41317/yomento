/**
 * Created by Karan on 2017-10-26.
 */
import * as Types from 'src/action-types'
import {Alert} from 'react-native'

export const loginLocal = (user) => ({
  type: Types.LOGIN_LOCAL,
  payload: user,
})

export const loginWithLinkedIn = (user) => ({
  type: Types.LOGIN_WITH_LINKEDIN,
  payload: user,
})

export const loginSuccess = (user) => ({
  type: Types.LOGIN_SUCCESS,
  payload: user,
})

export const loginFailure = (user) => ({
  type: Types.LOGIN_FAILURE,
  payload: user,
})

export const linkedInLogout = (user) => ({
  type: Types.LOGOUT,
  payload: user,
})

export const usernameChanged = (text) => {
  console.log('printing actiom', text)

  return {
    type: Types.USERNAME_CHANGE,
    payload: text,
  }
}

export const emailChanged = (text) => {
  return {
    type: Types.EMAIL_CHANGE,
    payload: text,
  }
}

export const passwordChanged = (text) => {
  return {
    type: Types.PASSWORD_CHANGE,
    payload: text,
  }
}

// register action
export const registerUser = (user, navigation) => {
  //const {username, email, password} = user
  return dispatch => {
    /*axios.post(API_CONST.baseUrl + API_CONST.register, {
      username: username,
      email: email,
      password: password,
    }).then((response) => {
      if (response.data) {
        // loginDone(dispatch,response)
        navigation.navigate('NEWS')
      }
    }).catch((error) => console.warn('Something Went wrong!!!'))*/
  }
}
// login action
export const userLogin = (username, password, navigation) => {
  return dispatch => {
    axios.post(API_CONST.baseUrl + API_CONST.login, {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.length > 0) {
        loginDone(dispatch, response)
        //  AsyncStorage.setItem('uid',response.data._id,(res)=> {})
        navigation.navigate('NEWS')
      } else {
        loginFail(dispatch, response)
      }
    }).catch((response) => loginFail(dispatch, response))
  }
}

const loginDone = (dispatch, response) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: response.data,
  })
}

const loginFail = (dispatch, response) => {
  dispatch({
    type: LOGIN_FAIL,
    payload: (response.message) ? response.message : 'Invalid Login',
  })
}

