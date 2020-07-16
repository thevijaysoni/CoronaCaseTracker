import { put } from 'redux-saga/effects';
import { API_GET_GLOBAL_CASES_SUCCESS, API_GET_GLOBAL_CASES_FAIL, API_GET_COUNTRY_WISE_CASES_SUCCESS, API_GET_COUNTRY_WISE_CASES_FAIL } from '../utils/ApiTypes';
import callApis from '../services/apiCalls';


export function* getCountryWiseCasesAction(action) {
    try {
        const data = yield callApis(action)
        //console.log('country data:::::::::::::::::::::::', data)
        yield put({
            type: API_GET_COUNTRY_WISE_CASES_SUCCESS,
            payload: data
        })

    } catch (error) {
        console.log('country error:::::::::::::::::::::::', error)
        yield put({
            type: API_GET_COUNTRY_WISE_CASES_FAIL,
            payload: null
        })
    }
}