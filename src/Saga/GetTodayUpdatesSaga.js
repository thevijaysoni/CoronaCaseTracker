import { put } from 'redux-saga/effects';
import { API_GET_GLOBAL_CASES_SUCCESS, API_GET_GLOBAL_CASES_FAIL, API_GET_INDIA_CASES_SUCCESS, API_GET_INDIA_CASES_FAIL, API_GET_TODAYS_UPDATES_SUCCESS, API_GET_TODAYS_UPDATES_FAIL } from '../utils/ApiTypes';
import callApis from '../services/apiCalls';


export function* getTodayUpdatesAction(action) {
    try {
        const data = yield callApis(action)
        //console.log('global data:::::::::::::::::::::::', data)
        yield put({
            type: API_GET_TODAYS_UPDATES_SUCCESS,
            payload: data
        })

    } catch (error) {
        console.log('global error:::::::::::::::::::::::', error)
        yield put({
            type: API_GET_TODAYS_UPDATES_FAIL,
            payload: null
        })
    }
}