/**
 * Created by Karan on 2017-12-02.
 */
import { createSelector } from 'reselect'

import {
  profileState,
  authState,
  loopState
} from 'src/selectors/common'

export const onBoardingSelector = createSelector(
  [profileState, authState, loopState],
  (profile, auth, loop) => ({
    profile,
    auth,
    loop
  }),
)
