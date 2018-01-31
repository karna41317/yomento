import * as Types from './../action-types'

const initialState = {
  user: null,
  fetching: false,
}

export default (state = initialState, action = {}) => {
  switch (action.type) {

    case Types.USERNAME_CHANGE:

      return {
        ...state,
        fetching: false,
        //authType: action.payload['authType'],
        user: {
          ...state.user,
          name: action.payload,
        },
      }
    case Types.PASSWORD_CHANGE:
      return {
        ...state,
        fetching: false,
        //authType: action.payload['authType'],
        user: {
          ...state.user,
          password: action.payload,
        },
      }

    case Types.EMAIL_CHANGE:
      return {
        ...state,
        fetching: false,
        //authType: action.payload['authType'],
        user: {
          ...state.user,
          email: action.payload,
        },
      }

    case Types.LOGIN_USER:
    case Types.SIGNUP_USER:
      return {
        ...state,
        fetching: false,
      }

    case Types.SIGNUP_SUCCESS:
      return {
        ...state,
        fetching: false,
        //authType: action.payload['authType'],
        userData: action.payload,
      }

    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        fetching: false,
        //authType: action.payload['authType'],
        userData: action.payload,
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
        loginError: action.payload,
        //authType: action.payload['authType'],
      }
    case Types.LOG_OUT:
      return state
    default:
      return state
  }
}
