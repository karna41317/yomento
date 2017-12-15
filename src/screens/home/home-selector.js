/**
 * Created by Karan on 2017-11-20.
 */
import { createSelector } from 'reselect'

import {
  dashboardState,
  authState
} from '../../selectors/common'

export const homeSelector = createSelector(
  [dashboardState,authState],
  (dashboard, auth) => ({
    dashboard,
    auth
  }),
)
