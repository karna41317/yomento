import actionAsPromise from './actionAsPromise'
import MixpanelAnalytics from './mixpanel'
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
const options = {}

/*MixpanelAnalytics.actionTracking,
  MixpanelAnalytics.screenTracking,*/

export default [
  actionAsPromise(options),
  promiseMiddleware,
  thunkMiddleware,

]

export const Injector = {
  inject: opts => Object.assign(options, opts || {})
}
