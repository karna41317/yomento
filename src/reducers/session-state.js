import * as Types from './../action-types'

const initialState = {
  isReady: false,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {

    case Types.RESET_STATE:
      return {
        state,
        isReady: true,
      }
    case Types.INITIALIZE_STATE:
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
