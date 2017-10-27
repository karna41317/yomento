/**
 * Created by Karan on 2017-10-26.
 */

import * as Types from './../action-types'

const initialState = {
  user: null,
  fetching: false,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {

    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        fetching: false,
        //authType: action.payload['authType'],
        user: action.payload
      }
    case Types.LOGIN_WITH_LINKEDIN:
    case Types.LOGIN_LOCAL:
      return {
        ...state,
        fetching: true,
        //authType: action.payload['authType'],
      }
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        fetching: false,
        //authType: action.payload['authType'],
      }
    case Types.LOGOUT:
      return {
        ...state,
        fetching: false,
        user: null,
        //authType: null,
      }
    default:
      return state
  }
}
