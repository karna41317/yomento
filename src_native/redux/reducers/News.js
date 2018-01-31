import * as types from '../action/types'

const INITIAL_STATE = { allNews: [], error: '',loading: false,selected: null}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.NEWS_FETCH_FAIL:
            return {...state,error: action.payload}
        case types.NEWS_FETCH_SUCCESS:
            return {...state,allNews: action.payload,loading:true}
        case types.SELECTED_NEWS:
            return {...state,selected: action.payload}
        default:
            return state
    }
}