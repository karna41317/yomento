/**
 * Created by Karan on 2017-11-10.
 */

import * as Types from './../action-types'

const initialState = {
  fetching: false,
  profileRating: [],
  profileContent:[]
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
      console.log('printing', payload)

      return {
        ...state,
        profileRating: {
          ...state.profileRating,
          [payload.profile_type]: {
            qtn_id: payload.profile_qtn_id,
            theme_id: payload.profile_qtn_id,
            qtn_result: payload.result,
          },
        },
      }
    default:
      return state
  }
}
