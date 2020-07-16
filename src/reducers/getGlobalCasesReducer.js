import { API_GET_GLOBAL_CASES_METHOD, API_GET_GLOBAL_CASES_SUCCESS, API_GET_GLOBAL_CASES_FAIL } from '../utils/ApiTypes';

export default function getGlobalCasesReducer(state = {}, action) {
    switch (action.type) {

        case API_GET_GLOBAL_CASES_METHOD:
            return { ...state, loading: true }

        case API_GET_GLOBAL_CASES_SUCCESS:
            return { ...state, loading: false, globalData: action.payload }

        case API_GET_GLOBAL_CASES_FAIL:
            return { ...state, loading: false, globalData: null }

        default: return state
    }
}
