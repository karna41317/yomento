import * as Types from './../action-types'
import { find, set, map, extend, assign } from 'lodash'

const initialState = {
  fetching: false,
  dashboardCards: [],
  firstLaunch: false,
}

export default (state = initialState, {type, payload}) => {

  switch (type) {
    case Types.FETCH_DASHBOARD_CARDS:
      return {
        ...state,
        fetching: true,
      }
    case Types.RECEIVE_DASHBOARD_CARDS:
      return {
        ...state,
        dashboardCards: payload,
        fetching: false,
      }
    case Types.ERROR_DASHBOARD_CARDS:
      return {
        ...state,
        ...payload,
        fetching: false,
      }
    default:
      return state
  }
}

