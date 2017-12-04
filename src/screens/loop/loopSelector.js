/**
 * Created by Karan on 2017-11-20.
 */
import { createSelector } from 'reselect'

import {
  dashboardState,
  loopState,
} from '../../selectors/common'

export const loopSelector = createSelector(
  [dashboardState, loopState],
  (dashboard, loop) => ({
    dashboard,
    loop,
  }),
)
