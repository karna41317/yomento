/**
 * Created by Karan on 2017-10-25.
 */

import { createStructuredSelector } from 'reselect'
import { navigatorStateSelector } from 'src/selectors'

export const navSelector = createStructuredSelector({
  nav: navigatorStateSelector,
})