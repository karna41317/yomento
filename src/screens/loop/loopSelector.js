/**
 * Created by Karan on 2017-11-20.
 */
import { createSelector } from 'reselect'

import {
  dashboardState,
  loopState,
  authState
} from '../../selectors/common'

export const loopSelector = createSelector(
  [dashboardState, loopState, authState],
  (dashboard, loop,auth) => ({
    dashboard,
    loop,
    auth
  }),
)
