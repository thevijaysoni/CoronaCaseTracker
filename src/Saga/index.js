import { all, takeLatest, takeEvery } from 'redux-saga/effects';
import { API_GET_GLOBAL_CASES_METHOD, API_GET_COUNTRY_WISE_CASES_METHOD, API_GET_INDIA_CASES_METHOD, API_GET_TODAYS_UPDATES_METHOD } from '../utils/ApiTypes';
import { getGlobalCasesAction } from './GetGlobalCasesSaga'
import { getCountryWiseCasesAction } from './GetCountryWiseCasesSaga'
import { getIndiaCasesAction } from './GetIndiaCasesSaga'
import { getTodayUpdatesAction } from './GetTodayUpdatesSaga';

function* watchGetGlobalCaseAction() {
    yield takeLatest(API_GET_GLOBAL_CASES_METHOD, getGlobalCasesAction)
}

function* watchGetCountryWiseCaseAction() {
    yield takeLatest(API_GET_COUNTRY_WISE_CASES_METHOD, getCountryWiseCasesAction)
}

function* watchGetIndiaCaseAction() {
    yield takeLatest(API_GET_INDIA_CASES_METHOD, getIndiaCasesAction)
}

function* watchTodaysUpdatesAction() {
    yield takeLatest(API_GET_TODAYS_UPDATES_METHOD, getTodayUpdatesAction)
}

function* rootSaga() {
    yield all([
        watchGetGlobalCaseAction(),
        watchGetCountryWiseCaseAction(),
        watchGetIndiaCaseAction(),
        watchTodaysUpdatesAction()
    ])
}

export default rootSaga;