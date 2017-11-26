import * as Types from './../action-types'
import { find, set, map, extend, assign } from 'lodash'
import { dashboard } from '../screens/dashboard/dashboard-selector'

const initialState = {
  fetching: false,
  dashboardCards: [],
  mainCards: [],
  nextCards: [],
  redoCards: [],
  completedCards: [],
  firstLaunch: false,
}

/*

const mainCards = get(dashboardCards, 'main_card')
const completedCards = get(dashboardCards, 'completed_card')
const nextCards = get(dashboardCards, 'next_card')
const redoCards = get(dashboardCards, 'redo_card')
const mainCard = head(dashboardCards)

*/

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
        mainCards: payload.main_card,
        nextCards: payload.next_card,
        redoCards: payload.redo_card,
        completedCards: payload.completed_card,
        fetching: false,
      }
    case Types.ERROR_DASHBOARD_CARDS:
      return {
        ...state,
        ...payload,
        fetching: false,
      }

    case Types.UPDATE_DASHBOARD_CARDS:
      return {
        ...state,
        mainCards: payload,
        fetching: false,
      }
    default:
      return state
  }
}

