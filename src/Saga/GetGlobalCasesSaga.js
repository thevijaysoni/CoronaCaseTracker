import { put } from 'redux-saga/effects';
import { API_GET_GLOBAL_CASES_SUCCESS, API_GET_GLOBAL_CASES_FAIL } from '../utils/ApiTypes';
import callApis from '../services/apiCalls';


export function* getGlobalCasesAction(action) {
    try {
        const data = yield callApis(action)
        //console.log('global data:::::::::::::::::::::::', data)
        yield put({
            type: API_GET_GLOBAL_CASES_SUCCESS,
            payload: data
        })

    } catch (error) {
        console.log('global error:::::::::::::::::::::::', error)
        yield put({
            type: API_GET_GLOBAL_CASES_FAIL,
            payload: null
        })
    }
}