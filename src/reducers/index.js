import { combineReducers } from 'redux';
import getGlobalCasesReducer from './getGlobalCasesReducer';
import getCountryWiseCasesReducer from './getCountryWiseCasesReducer';
import getIndiaCasesReducer from './getIndiaCasesReducer';
import getTodaysUpdatesReducer from './getTodaysUpdatesReducer';

const rootReducer = combineReducers({
    getGlobalCasesReducer,
    getCountryWiseCasesReducer,
    getIndiaCasesReducer,
    getTodaysUpdatesReducer,
});

export default rootReducer;