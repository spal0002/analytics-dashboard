
import axios from 'axios';

export const getBrandsData = () => {
    return axios.get('/mockdata/data.json')
        .then((response) => {
            return response.data.top_brands;
        })
        .catch((err) => { })
}


export const getPatientsData = () => {
    return axios.get('/mockdata/data.json')
        .then((response) => {
            return response.data.patients;
        })
        .catch((err) => { })
}

export const getDashboardData = () => {
    return axios.get('/mockdata/data.json')
        .then((response) => {
            return response.data;
        })
        .catch((err) => { })
}

