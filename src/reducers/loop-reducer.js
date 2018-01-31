import * as Types from './../action-types'
import { find, set, map, extend, assign } from 'lodash'

const initialState = {
  fetching: false,
  loop: [],
  firstLaunch: false,
  loopData: {}
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
    case Types.FETCH_LOOP_STYLES :
      return {
        ...state,
        fetching: true,
      }
    case Types.RECEIVE_LOOP_STYLES:
      return {
        ...state,
        loopStyles: payload,
        fetching: false,
      }
    case Types.ERROR_LOOP_STYLES:
      return {
        ...state,
        loopStylesError: payload,
        fetching: false,
      }
    case Types.UPDATE_LOOP_DETAILS:
      return {
        ...state,
        loopData: payload
      }

    case Types.ERROR_UPDATE_LOOP_DETAILS:
      return {
        ...state,
        error: payload
      }
    default:
      return state
  }
}

