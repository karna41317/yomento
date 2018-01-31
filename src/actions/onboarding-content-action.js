/**
 * Created by Karan on 2017-11-10.
 */
import { fetchOnBoardingContent } from 'src/api'
import * as Types from 'src/action-types'

export const getOnBoardingContent = () => {
  return dispatch => {
    dispatch({type: Types.FETCH_ONBOARDING_CONTENT})
    try {
      fetchOnBoardingContent().then(data => {
        dispatch({
          type: Types.RECEIVE_ONBOARDING_CONTENT,
          payload: data,
        })
      })
    } catch (err) {
      dispatch({
        type: Types.ERROR_ONBOARDING_CONTENT,
        payload: err,
      })
    }
  }
}
