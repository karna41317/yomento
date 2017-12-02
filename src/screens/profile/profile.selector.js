/**
 * Created by Karan on 2017-12-02.
 */
import { createSelector } from 'reselect'

import {
  profileState,
  authState
} from '../../selectors/common'

export const profileSelector = createSelector(
  [profileState, authState],
  (profile, auth) => ({
    profile,
    auth,
  }),
)
