/**
 * Created by Karan on 2017-11-10.
 */

import { get } from 'lodash'
import { reduxStore } from 'src/store/store'

import { apiModule } from 'src/api'
import * as Types from 'src/action-types'

export const getDashboardCards = () => {
  return dispatch => {
    const state = reduxStore.getState()
    const token = get(state, 'auth.userData.authorization')


    dispatch({type: Types.FETCH_DASHBOARD_CARDS})
    try {
      apiModule.fetchDashboardCards(token).then(data => {
        dispatch({
          type: Types.RECEIVE_DASHBOARD_CARDS,
          payload: data,
        })
      })
    } catch (err) {
      dispatch({
        type: Types.ERROR_DASHBOARD_CARDS,
        payload: err,
      })
    }
  }
}

export const updateDashboardCards = (cards) => {
  return dispatch => {
    try {
      dispatch({
        type: Types.UPDATE_DASHBOARD_CARDS,
        payload: cards,
      })
    } catch (err) {
      dispatch({
        type: Types.ERROR_DASHBOARD_CARDS,
        payload: err,
      })
    }
  }
}

