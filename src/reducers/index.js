import { combineReducers } from 'redux';
import appReducer from './appReducer';

const rootReducer = combineReducers({
    dashboardData: appReducer
});

export default rootReducer;