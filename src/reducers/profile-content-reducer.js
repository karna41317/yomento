/**
 * Created by Karan on 2017-11-10.
 */

import * as Types from './../action-types'

const initialState = {
  fetching: false,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case Types.FETCH_PROFILE_CONTENT:
      return {
        ...state,
        fetching: true,
      }
    case Types.RECEIVE_PROFILE_CONTENT:
      return {
        ...state,
        ...action.payload,
        fetching: false,
      }
    case Types.ERROR_PROFILE_CONTENT:
      return {
        ...state,
        ...action.payload,
        fetching: false,
      }
    default:
      return state
  }
}
