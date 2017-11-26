import actionAsPromise from './actionAsPromise'
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
const options = {}

export default [
  actionAsPromise(options),
  promiseMiddleware,
  thunkMiddleware
]

export const Injector = {
  inject: opts => Object.assign(options, opts || {})
}
