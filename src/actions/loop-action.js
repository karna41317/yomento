import { fetchLoops } from 'src/api'
import * as Types from 'src/action-types'
import { reduxStore } from 'src/store/store'
import { apiModule } from 'src/api'
export const getLoops = () => {
  return dispatch => {
    const state = reduxStore.getState()
    const token = get(state, 'auth.userData.authorization')
    dispatch({type: Types.FETCH_LOOPS})
    try {
      apiModule.fetchLoops(token).then(data => {
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
