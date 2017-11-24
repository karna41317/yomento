/**
 * Created by Karan on 2017-11-20.
 */
/**
 * Created by Karan on 2017-11-10.
 */
import { fetchLoops } from 'src/api'
import * as Types from 'src/action-types'

export const getLoops = () => {
  return dispatch => {
    dispatch({type: Types.FETCH_LOOPS})
    try {
      fetchLoops().then(data => {
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
