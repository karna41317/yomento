/**
 * Created by Karan on 2017-10-25.
 */
import * as Types from 'src/action-types'

export const update = payload => ({
  type: Types.UPDATE_PERSIST,
  payload
});