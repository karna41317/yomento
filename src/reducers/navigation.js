/**
 * Created by Karan on 2017-10-25.
 */
import { NavigationActions } from 'react-navigation'
import includes from 'lodash/includes'

import { AppNavigator } from 'src/routes'

export default (state, action) => {
  if (!state) {
    return AppNavigator.router.getStateForAction(action, state)
  }

  if (includes(NavigationActions, action.type)) {
    return AppNavigator.router.getStateForAction(action, state)
  }

  return state
}
