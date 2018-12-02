import * as actionTypes from './actionTypes';


export const onLoadBrands = (brands) => {
    return {
        type: actionTypes.ON_LOAD_BRANDS,
        payload: brands
    };
};

export const onLoadPatients = (patients) => {
    return {
        type: actionTypes.ON_LOAD_PATIENTS,
        payload: patients
    };
};

export const onLoadDashboardData = (dashboard) => {
    return {
        type: actionTypes.ON_LOAD_DASHBOARD,
        payload: dashboard
    };
};


