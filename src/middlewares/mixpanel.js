import { NavigationActions } from 'react-navigation'
import Mixpanel from 'react-native-mixpanel'
import { get } from 'lodash'

import * as Types from 'src/action-types'

import * as persist from 'redux-persist/constants'

/*
  The middleware injects the `getState` method (from the store) into the action
  `getState` is later exposed on the action i.e. while working on reducers
*/
const injectGetState = ({getState}) => next => action => {
  next({
    ...action,
    getState: getState,
  })
}

/*
  The middleware acts as a general hook in order to track any meaningful action
*/
const actionTracking = store => next => action => {
  let result = next(action)

  switch (action.type) {
    /*case APPLICATION_STATE_CHANGE_ACTION: {
      Mixpanel.trackWithProperties('APPLICATION_STATE_CHANGE', {
        APPLICATION_STATE_NAME: result.name,
      })
      break
    }*/
    case Types.SIGNUP_SUCCESS: {
      const user = get(result, 'payload.user')


      Mixpanel.trackWithProperties('SIGNUP_SUCCESS', {
        user: user,
      })
      Mixpanel.set({
        "$email": user.email,
        "userName": user.first_name,
        "Created": new Date().toISOString()
      })
      break
    }

    case Types.LOGIN_SUCCESS: {
      const userData = get(result, 'payload.user')
      Mixpanel.trackWithProperties('LOGIN_SUCCESS', {
        user: userData,
      })
      break
    }

    case Types.LOGIN_FAILURE: {
      Mixpanel.track('LOGIN_FAILURE')
      break
    }

    default: {
      break
    }
  }

  return result
}

// gets the current screen from navigation state
function getCurrentRouteName (navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route)
  }
  return route.routeName
}

/*
  The middleware acts as a general hook in order to track any meaningful navigation action
  https://reactnavigation.org/docs/guides/screen-tracking#Screen-tracking-with-Redux
*/
const screenTracking = ({getState}) => next => action => {
  if (
    action.type !== NavigationActions.NAVIGATE &&
    action.type !== NavigationActions.BACK
  ) {
    return next(action)
  }

  const currentScreen = getCurrentRouteName(getState().nav)
  const result = next(action)
  const nextScreen = getCurrentRouteName(getState().nav)

  if (nextScreen !== currentScreen) {
    Mixpanel.trackWithProperties('SCREEN_CHANGE', {
      SCREEN_NAME: nextScreen,
    })
  }
  return result
}

module.exports = {
  injectGetState,
  actionTracking,
  screenTracking,
}
