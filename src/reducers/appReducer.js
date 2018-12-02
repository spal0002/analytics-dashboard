import * as actionTypes from '../actions/actionTypes';

const intialState = {
    dashboard: [],
    brands:[],
    patients:[]  
}

const dashboardReducer = function (currentState = intialState, action) {
    switch (action.type) {
        case actionTypes.ON_LOAD_DASHBOARD:
            return {
                ...currentState,
                dashboard: action.payload
            }
        case actionTypes.ON_LOAD_BRANDS:
            return {
                ...currentState,
                brands: action.payload
            }
        case actionTypes.ON_LOAD_PATIENTS:
            return {
                ...currentState,
                patients: action.payload
            }
            
        default:
            return currentState
    }
}

export default dashboardReducer;