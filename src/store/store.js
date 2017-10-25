/**
 * Created by Karan on 2017-10-25.
 */
import React from 'react'
import { AsyncStorage } from 'react-native'
import { PureComponent } from 'react-native-mdcore'

import { connect as reactReduxConnect, Provider } from 'react-redux'
import { applyMiddleware, bindActionCreators as reduxBindActionCreators, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'


import { persistStore, autoRehydrate } from 'redux-persist'
import createMigration from 'redux-persist-migrate'

import middlewares, { Injector } from 'src/middlewares'
import {update} from 'src/actions'
import * as apiModules from 'src/api'
import reducers from 'src/reducers'

import migration from './migration'

Injector.inject(apiModules)
const store = createStore(reducers, {}, composeWithDevTools(
  createMigration(migration, 'settings'),
  applyMiddleware(
    ...middlewares,
    createLogger({
      predicate: (getState, action) => __DEV__, //eslint-disable-line
      collapsed: true,
      duration: true
    })
  ),
  autoRehydrate(),
  next => (reducers, initialState, enhancer) => {
    const nextStore = next(reducers, initialState, enhancer)
    Injector.inject({
      getState: nextStore.getState
    })
    return nextStore
  }
))
persistStore(store, {
  storage: AsyncStorage,
},
  () => store.dispatch(update({isHydrated: true})),)

export default class Store extends PureComponent {

  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export const bindActionCreators = reduxBindActionCreators
export const connect = reactReduxConnect
