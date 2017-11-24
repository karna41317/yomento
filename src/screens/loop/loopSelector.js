/**
 * Created by Karan on 2017-11-20.
 */
import { createSelector } from 'reselect'

import {
  loopState,
} from '../../selectors/common'

export const loopSelector = createSelector(
  [loopState],
  (loop) => ({
    loop,
  }),
)
