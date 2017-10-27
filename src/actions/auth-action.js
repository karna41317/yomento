/**
 * Created by Karan on 2017-10-26.
 */
import * as Types from 'src/action-types'

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

