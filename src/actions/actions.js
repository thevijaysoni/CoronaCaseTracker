import { API_GET_GLOBAL_CASES_METHOD, API_GET_COUNTRY_WISE_CASES_METHOD, API_GET_INDIA_CASES_METHOD, API_GET_TODAYS_UPDATES_METHOD, API_GET_STATE_WISE_METHOD } from '../utils/ApiTypes';

export function getGlobalDataAction() {
    return {
        type: API_GET_GLOBAL_CASES_METHOD,
    }
}

export function getCountryWiseDataAction() {
    return {
        type: API_GET_COUNTRY_WISE_CASES_METHOD,
    }
}

export function getIndiaDataAction() {
    return {
        type: API_GET_INDIA_CASES_METHOD,
    }
}

export function getTodaysUpdatesAction() {
    return {
        type: API_GET_TODAYS_UPDATES_METHOD,
    }
}