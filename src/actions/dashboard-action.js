/**
 * Created by Karan on 2017-11-10.
 */
import { fetchDashboardCards } from 'src/api'
import * as Types from 'src/action-types'

export const getDashboardCards = () => {
  return dispatch => {
    dispatch({type: Types.FETCH_DASHBOARD_CARDS})
    try {
      fetchDashboardCards().then(data => {
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
