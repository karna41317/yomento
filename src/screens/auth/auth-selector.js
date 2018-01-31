
import { createSelector } from 'reselect'

import {
  profileState,
  authState
} from '../../selectors/common'

export const authSelector = createSelector(
  [profileState, authState],
  (profile, auth) => ({
    profile,
    auth,
  }),
)
