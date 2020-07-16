import { API_GET_INDIA_CASES_METHOD, API_GET_INDIA_CASES_SUCCESS, API_GET_INDIA_CASES_FAIL } from '../utils/ApiTypes';

export default function getIndiaCasesReducer(state = {}, action) {
    switch (action.type) {

        case API_GET_INDIA_CASES_METHOD:
            return { ...state, loading: true }

        case API_GET_INDIA_CASES_SUCCESS:
            return { ...state, loading: false, indiaData: action.payload }

        case API_GET_INDIA_CASES_FAIL:
            return { ...state, loading: false, indiaData: null }

        default: return state
    }
}
