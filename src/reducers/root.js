import * as Types from 'src/action-types'

const defaultState = {
  fetching: {},
  user: null,
  firstLaunch: true,
  appLoaded: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case Types.FIRST_LAUNCH: {
      return {
        ...state,
        firstLaunch:false,
        appLoaded:true
      }
    }
    default:
      return state
  }
}
