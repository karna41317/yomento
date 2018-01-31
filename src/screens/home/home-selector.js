/**
 * Created by Karan on 2017-11-20.
 */
import { createSelector } from 'reselect'

import {
  dashboardState,
  authState,
  profileState
} from '../../selectors/common'

export const homeSelector = createSelector(
  [dashboardState,authState, profileState],
  (dashboard, auth, profile) => ({
    dashboard,
    auth,
    profile
  }),
)
