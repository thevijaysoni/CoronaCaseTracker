import { API_GET_INDIA_CASES_METHOD, API_GET_INDIA_CASES_SUCCESS, API_GET_INDIA_CASES_FAIL, API_GET_TODAYS_UPDATES_METHOD, API_GET_TODAYS_UPDATES_SUCCESS, API_GET_TODAYS_UPDATES_FAIL } from '../utils/ApiTypes';

export default function getTodaysUpdatesReducer(state = {}, action) {
    switch (action.type) {

        case API_GET_TODAYS_UPDATES_METHOD:
            return { ...state, loading: true }

        case API_GET_TODAYS_UPDATES_SUCCESS:
            return { ...state, loading: false, todaysUpdate: action.payload }

        case API_GET_TODAYS_UPDATES_FAIL:
            return { ...state, loading: false, todaysUpdate: null }

        default: return state
    }
}
