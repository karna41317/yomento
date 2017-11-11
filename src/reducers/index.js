/**
 * Created by Karan on 2017-10-25.
 */
import { combineReducers } from 'redux'
import rootReducer from './root'
import sessionStateReducer from './session-state'
import navigationReducer from './navigation'
import authReducer from './auth-reducer'
import profileContentReducer from './profile-content-reducer'

export default combineReducers({
  root: rootReducer,
  session: sessionStateReducer,
  navigatorState:navigationReducer,
  auth: authReducer,
  profile: profileContentReducer
})
