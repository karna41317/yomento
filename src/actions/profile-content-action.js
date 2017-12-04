/**
 * Created by Karan on 2017-11-10.
 */
import { apiModule } from 'src/api'
import { reduxStore } from 'src/store/store'
import * as Types from 'src/action-types'
import { get } from 'lodash'

export const getProfileContent = () => {
  return dispatch => {
    const state = reduxStore.getState()
    const token = get(state, 'auth.userData.authorization')
    try {
      apiModule.fetchProfileContent(token).then(data => {
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
export const AddProfileContent = (profileRatings) => {
  return dispatch => {
    const state = reduxStore.getState()
    const token = get(state, 'auth.userData.authorization')
    try {
      apiModule.AddProfileContent(token, profileRatings).then(data => {
        dispatch({
          type: Types.RECEIVE_PROFILE_RATINGS,
          payload: data,
        })
      })
    } catch (err) {
      dispatch({
        type: Types.ERROR_PROFILE_RATINGS,
        payload: err,
      })
    }
  }
}


export const saveProfileRating = (data) => {
  return dispatch => {
    try {
      dispatch({
        type: Types.SAVE_PROFILE_RATING,
        payload: data,
      })
    } catch (err) {
      dispatch({
        type: Types.ERROR_PROFILE_RATINGS,
        payload: err,
      })
    }
  }
}

export const launchFirstTime = () => {
  return dispatch => {
    try {
      dispatch({
        type: Types.FIRST_PROFILE_LAUNCH,
      })
    } catch (err) {
      dispatch({
        type: Types.ERROR_PROFILE_LAUNCH,
        payload: err,
      })
    }
  }
}

export const profileLanunched = () => {
  return dispatch => {
    try {
      dispatch({
        type: Types.PROFILE_LAUNCHED,
      })
    } catch (err) {
      dispatch({
        type: Types.ERROR_PROFILE_LAUNCHED,
        payload: err,
      })
    }
  }
}
