import { fetchLoops } from 'src/api'
import * as Types from 'src/action-types'
import { getDashboardCards } from './dashboard-action'
import { reduxStore } from 'src/store/store'
import { apiModule } from 'src/api'
import { get } from 'lodash'

export const getLoopStyles = () => {
  return dispatch => {
    const state = reduxStore.getState()
    const token = get(state, 'auth.userData.authorization')
    dispatch({type: Types.FETCH_LOOP_STYLES})
    try {
      apiModule.fetchLoopStyles(token).then(data => {
        dispatch({
          type: Types.RECEIVE_LOOP_STYLES,
          payload: data,
        })
      })
    } catch (err) {
      dispatch({
        type: Types.ERROR_LOOP_STYLES,
        payload: err,
      })
    }
  }
}

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
    const nextScreen = get(parameteres, 'nextScreen')


    try {
      apiModule.updateCard(token, params).then(data => {
        if (data.status && data.status === 'success') {
          if (nextScreen) {
            navigation.navigate(nextScreen)
            dispatch({
              type: Types.UPDATE_CARD,
              payload: data,
            })
            dispatch(getDashboardCards())
          }
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
export const updateLoopDetails = (data) => {
  return dispatch => {
    try {
      dispatch({
        type: Types.UPDATE_LOOP_DETAILS,
        payload: data,
      })
    } catch (err) {
      dispatch({
        type: Types.ERROR_UPDATE_LOOP_DETAILS,
        payload: err,
      })
    }
  }
}



/*
export const updateCards = (parameteres, navigation) => {
  return dispatch => {
    const state = reduxStore.getState()
    const token = get(state, 'auth.userData.authorization')

    const params = {
      pathParams: get(parameteres, 'pathParams'),
      bodyParams: get(parameteres, 'bodyParams', {}),
    }
    const card_type = get(params, 'pathParams.card_type')


    return new Promise(
      function (resolve, reject) {
        apiModule.updateCard(token, params).then(data => {
          if (data.status && data.status === 'success') {
            dispatch({
              type: Types.UPDATE_CARD,
              payload: data,
            })
            resolve(data)
          } else {
            reject(data.message)
            dispatch({
              type: Types.ERROR_UPDATE_CARD,
              payload: data.message,
            })
          }
        })
      },
    )

  }
}
*/



