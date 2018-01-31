import axios from 'axios'
import * as API_CONST from '../../../services/apiConstant'
import * as types from './types'

export const fetchNews = () => {
    return dispatch => {
        axios.get(API_CONST.baseUrl+API_CONST.news)
            .then((response)=> {
                newsFetchSuccess(dispatch,response)})
            .catch((error)=> { newsFetchFail(dispatch,error)})
    }
}

const newsFetchSuccess = (dispatch,response) => {
    dispatch({
        type: types.NEWS_FETCH_SUCCESS,
        payload: response.data
    })
}

const newsFetchFail = (dispatch,error) => {
    dispatch({
        type: types.NEWS_FETCH_FAIL,
        payload: error.message
    })
}

// single news selected
export const selectedNews = (singleNews) =>{
    return{
        type: types.SELECTED_NEWS,
        payload: singleNews
    }
}
