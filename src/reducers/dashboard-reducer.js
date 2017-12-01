import * as Types from './../action-types'
import { find, set, map, extend, assign } from 'lodash'
import { dashboard } from '../screens/dashboard/dashboard-selector'

const initialState = {
  fetching: false,
  dashboardCards: [],
  newCard: [],
  futureCards: [],
  nextCards:[],
  redoCards: [],
  finishedCards:[],
  reminderCards: [],
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
        newCard: payload.new_card,
        futureCards: payload.futured_cards,
        nextCards: payload.next_cards,
        redoCards: payload.redo_cards,
        finishedCards: payload.finished_cards,
        reminderCards: payload.reminder_cards,
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

