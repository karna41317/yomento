/**
 * Created by Karan on 2017-10-26.
 */
import * as Types from 'src/action-types'
import { apiModule } from 'src/api'
import { Alert } from 'react-native'

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

export const logOut = (dispatch, response) => ({
  type: Types.LOG_OUT,
})

export const usernameChanged = (text) => {
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
    apiModule.registerUser(user).then(data => {
      if (data.status !== 'success') {
        dispatch({
          type: Types.SIGNUP_FAILURE,
          payload: data.message,
        })
      }
      if (data.status === 'success') {
        const userData = {
          ...data,
          authorization: data.token_type + ' ' + data.token_access,
        }
        dispatch({
          type: Types.SIGNUP_SUCCESS,
          payload: userData,
        })
        dispatch({
          type: Types.LOGIN_SUCCESS,
          payload: userData,
        })
        if (data.profile_created === 'no') {
          navigation.navigate('onBoarding')
        } else {
          navigation.navigate('dashboard')
        }
      }
    })
  }
}
// login action
export const loginUser = (username, password, navigation) => {
  return dispatch => {

    apiModule.loginUser(username, password).then(data => {
      if (data.status !== 'success') {
        dispatch({
          type: Types.LOGIN_FAILURE,
          payload: data.message,
        })
      }
      if (data.status === 'success') {
        const userData = {
          ...data,
          authorization: data.token_type + ' ' + data.token_access,
        }
        dispatch({
          type: Types.LOGIN_SUCCESS,
          payload: userData,
        })
        if (data.profile_created === 'no') {
          navigation.navigate('onBoarding')
        } else {
          navigation.navigate('dashboard')
        }
      }
    })
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

