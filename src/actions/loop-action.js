import { fetchLoops } from 'src/api'
import * as Types from 'src/action-types'
import { getDashboardCards } from './dashboard-action'
import { reduxStore } from 'src/store/store'
import { apiModule } from 'src/api'
import { get } from 'lodash'

export const getLoops = (loop_id) => {
  return dispatch => {

    const state = reduxStore.getState()
    const token = get(state, 'auth.userData.authorization')
    dispatch({type: Types.FETCH_LOOPS})
    try {
      apiModule.fetchLoops(token, loop_id).then(data => {
        dispatch({
          type: Types.RECEIVE_LOOPS,
          payload: data,
        })
      })
    } catch (err) {
      dispatch({
        type: Types.ERROR_LOOPS,
        payload: err,
      })
    }
  }
}

export const updateCards = (parameteres, navigation) => {
  return dispatch => {
    const state = reduxStore.getState()
    const token = get(state, 'auth.userData.authorization')

    const params = {
      pathParams: get(parameteres, 'pathParams'),
      bodyParams: get(parameteres, 'bodyParams', {}),
    }
    const card_type = get(params, 'pathParams.card_type')
    try {
      apiModule.updateCard(token, params).then(data => {
        if (data.status && data.status === 'success') {
          if (card_type === 'reflection') {
            navigation.navigate('loopCoachReflectionAfter')
          } else {
            navigation.navigate('dashboard')
          }
          dispatch(getDashboardCards())
          dispatch({
            type: Types.UPDATE_CARD,
            payload: data,
          })

        }
      })
    } catch (err) {
      dispatch({
        type: Types.ERROR_UPDATE_CARD,
        payload: err,
      })
    }
  }
}
