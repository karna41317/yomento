import { createSelector } from 'reselect'

import {
  dashboardState,
  authState,
  loopState
} from '../../selectors/common'

export const dashboard = createSelector(
  [dashboardState, authState, loopState],
  (dashboard, auth, loop) => ({
    dashboard,
    auth,
    loop,
  }),
)
