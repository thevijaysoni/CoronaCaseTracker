const BASE_URL = 'https://corona.lmao.ninja/v2/'
const BASE_URL_2 = 'https://api.covid19india.org/v2/'
const BASE_URL_3 = 'https://api.covid19india.org/'

export const API_CRAETE_USER_METHOD = BASE_URL + 'api/users'
export const API_CRAETE_USER_SUCCESS = 'api_create_user_success'
export const API_CRAETE_USER_FAIL = 'api_create_user_fail'

export const API_GET_GLOBAL_CASES_METHOD = BASE_URL + 'all'
export const API_GET_GLOBAL_CASES_SUCCESS = 'api_get_global_cases_success'
export const API_GET_GLOBAL_CASES_FAIL = 'api_get_global_cases_fail'

export const API_GET_COUNTRY_WISE_CASES_METHOD = BASE_URL + 'countries'
export const API_GET_COUNTRY_WISE_CASES_SUCCESS = 'api_get_country_wise_cases_success'
export const API_GET_COUNTRY_WISE_CASES_FAIL = 'api_get_country_wise_cases_fail'

export const API_GET_INDIA_CASES_METHOD = BASE_URL_2 + 'state_district_wise.json'
export const API_GET_INDIA_CASES_SUCCESS = 'api_get_india_cases_success'
export const API_GET_INDIA_CASES_FAIL = 'api_get_india_cases_fail'

export const API_GET_TODAYS_UPDATES_METHOD = BASE_URL_3 + 'updatelog/log.json'
export const API_GET_TODAYS_UPDATES_SUCCESS = 'api_get_todays_updates_success'
export const API_GET_TODAYS_UPDATES_FAIL = 'api_get_todays_updates_fail'