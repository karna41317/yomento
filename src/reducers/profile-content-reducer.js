import * as Types from './../action-types'
import { find, set, map, extend, assign } from 'lodash'

const initialState = {
  fetching: false,
  profileRating: {
    'myself': [],
    'myideal': [],
  },
  profileRatingResponse: {},
  profileCreated: false,
  firstLaunch: false,
}

export default (state = initialState, {type, payload}) => {

  switch (type) {
    case Types.FIRST_PROFILE_LAUNCH:
      return {
        ...state,
        firstLaunch: true,
      }
    case Types.PROFILE_LAUNCHED:
      return {
        ...state,
        firstLaunch: false,
      }
    case Types.ERROR_PROFILE_LAUNCHED:
      return {
        ...state,
        firstLaunch: false,
      }

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
    case Types.RECEIVE_PROFILE_RATINGS:
      return {
        ...state,
        profileRatingResponse: payload,
      }
    case Types.ERROR_PROFILE_RATINGS:
      return {
        ...state,
        profileRatingError: payload,
      }
    default:
      return state
  }
}

function parsePayload (payload, ratingState) {
  let themeType = ratingState[payload.profile_type]
  let themeIDState = find(themeType, {theme_id: payload.theme_id})
  if (themeIDState) {
    const updatedState = mergeById(themeType, {
      qtn_id: payload.profile_qtn_id,
      theme_id: payload.theme_id,
      qtn_result: payload.result,
    })
    return updatedState
  } else {
    const initThemeIdState = [
      ...themeType, {
        qtn_id: payload.profile_qtn_id,
        theme_id: payload.theme_id,
        qtn_result: payload.result,
      }]
    return initThemeIdState
  }
}

function mergeById (themType, payload) {
  return map(themType, function (item) {
    return assign(item, find([payload], {theme_id: item.theme_id}))
  })
}
