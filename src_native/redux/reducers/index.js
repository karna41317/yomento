import {combineReducers} from 'redux'
import auth from './AuthReducer'
import news from './News'

export default combineReducers({ auth, news })