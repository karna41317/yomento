import { fetchLoops } from 'src/api'
import * as Types from 'src/action-types'
import { reduxStore } from 'src/store/store'
import { apiModule } from 'src/api'
import { get } from 'lodash'

export const getLoops = () => {
  return dispatch => {

    const state = reduxStore.getState()

    const token = get(state, 'auth.userData.authorization')
    console.log('printing', token)
    dispatch({type: Types.FETCH_LOOPS})
    console.log('printing', token)

    try {
      apiModule.fetchLoops(token).then(data => {
        console.log('printing data', data)

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
