/**
 * Created by Karan on 2017-11-10.
 */
import { fetchProfileContent } from 'src/api'
import * as Types from 'src/action-types'

export const getProfileContent = () => {
  return dispatch => {
    dispatch({type: Types.FETCH_PROFILE_CONTENT})
    try {
      fetchProfileContent().then(data => {
        dispatch({
          type: Types.RECEIVE_PROFILE_CONTENT,
          payload: data,
        })
      })
    } catch (err) {
      dispatch({
        type: Types.ERROR_PROFILE_CONTENT,
        payload: err,
      })
    }
  }
}
