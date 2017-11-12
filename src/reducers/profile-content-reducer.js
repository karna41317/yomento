/**
 * Created by Karan on 2017-11-10.
 */

import * as Types from './../action-types'
import { find, set } from 'lodash'

const initialState = {
  fetching: false,
  profileRating: {
    'myself': [],
    'myideal': [],
  },
}

export default (state = initialState, {type, payload}) => {

  switch (type) {
    case Types.FETCH_PROFILE_CONTENT:
      return {
        ...state,
        fetching: true,
      }
    case Types.RECEIVE_PROFILE_CONTENT:
      return {
        ...state,
        ...payload,
        fetching: false,
      }
    case Types.ERROR_PROFILE_CONTENT:
      return {
        ...state,
        ...payload,
        fetching: false,
      }
    case Types.SAVE_PROFILE_RATING:
      const profileRating = state.profileRating
      return {
        ...state,
        profileRating: {
          ...state.profileRating,
          [payload.profile_type]: parsePayload(payload, profileRating),
        },
      }
    default:
      return state
  }
}

function parsePayload (payload, ratingState) {

  //console.log('printing', payload, state)

  let themeType = ratingState[payload.profile_type]
  let themeIDState = find(themeType, {theme_id: payload.theme_id})
  console.log('printing themeIDState', themeType, themeIDState)
  //debugger
  if (themeIDState) {
    let updatedState = [
      ...themeIDState, {
        qtn_id: payload.profile_qtn_id,
        theme_id: payload.theme_id,
        qtn_result: payload.result,
      }]
   /* console.log('printing', ratingState)

    //ratingState[payload.profile_type][]
    //debugger
    ratingState[payload.profile_type][themeIDState] = updatedState
    console.log('printingupdatedState', ratingState)*/

    return []
  } else {
    let initThemeIdState = [
      ...themeType, {
        qtn_id: payload.profile_qtn_id,
        theme_id: payload.theme_id,
        qtn_result: payload.result,
      }]
    console.log('printing else initThemeIdState after push', initThemeIdState)

    return initThemeIdState
    //console.log('printing else', themeType[payload.theme_id])
  }
}

function mergeById (arr) {
  return {
    with: function (arr2) {
      return _.map(arr, item => {
        return _.find(arr2, obj => obj.id === item.id) || item
      })
    },
  }
}
