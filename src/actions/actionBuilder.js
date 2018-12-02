import * as actionDispatch from './actionDispatch';
import * as services from '../services';


export const loadBrands = () => {
    return dispatch => {
        services.getBrandsData()
         .then(response => {
            dispatch(actionDispatch.onLoadBrands(response));
         })
    }
}

export const loadPatients = () => {
    return dispatch => {
        services.getPatientsData()
         .then(response => {
            dispatch(actionDispatch.onLoadPatients(response));
         })
    }
}

export const loadDashboard = () => {
    return dispatch => {
        services.getDashboardData()
         .then(response => {
            dispatch(actionDispatch.onLoadDashboardData(response));
         })
    }
}

