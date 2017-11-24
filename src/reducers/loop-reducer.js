import * as Types from './../action-types'
import { find, set, map, extend, assign } from 'lodash'

const initialState = {
  fetching: false,
  loop: [],
  firstLaunch: false,
}

export default (state = initialState, {type, payload}) => {

  switch (type) {
    case Types.FETCH_LOOPS:
      return {
        ...state,
        fetching: true,
      }
    case Types.RECEIVE_LOOPS:
      return {
        ...state,
        loop: payload,
        fetching: false,
      }
    case Types.ERROR_LOOPS:
      return {
        ...state,
        ...payload,
        fetching: false,
      }
    default:
      return state
  }
}

