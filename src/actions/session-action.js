import * as Types from './../action-types'

export function resetSessionStateFromSnapshot(state) {
  return {
    type: Types.RESET_STATE,
    payload: state
  };
}

export function initializeSessionState() {
  return {
    type: Types.INITIALIZE_STATE
  };
}

