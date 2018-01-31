import { combineReducers } from 'redux'
import rootReducer from './root'
import sessionStateReducer from './session-state'
import navigationReducer from './navigation'
import authReducer from './auth-reducer'
import profileContentReducer from './profile-content-reducer'
import dashBoardReducer from './dashboard-reducer'
import loopReducer from './loop-reducer'
export default combineReducers({
  root: rootReducer,
  session: sessionStateReducer,
  navigatorState:navigationReducer,
  auth: authReducer,
  profile: profileContentReducer,
  dashboard: dashBoardReducer,
  loop: loopReducer
})
