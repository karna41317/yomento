/**
 * Created by Karan on 2017-10-25.
 */
import * as Types from './../action-types'

const initialState = {
  isReady: false,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case Types.INITIALIZE_STATE:
    case Types.RESET_STATE:
      return {
        ...state,
        isReady: true,
      }
    case Types.UPDATE_PERSIST:
      return {
        ...state,
        ...action.payload,
        isReady: true,

      }
    default:
      return state
  }
}