import axios from 'axios'
import * as SecureStore from 'expo-secure-store'
import { URI } from '../constants/declared'

const api = ({token} = {}) => {
    const api = axios.create({
        baseURL: URI +'/api',
    })

    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    api.interceptors.response.use(response => response, error => {
        if (error.response.status === 401) {
            SecureStore.deleteItemAsync('user')

            return Promise.reject({status: 401, errors: ['Unauthorized']})
        }

        if (error.response?.status === 422) {
            let errors = Object.values(error?.response?.data?.errors || {})

            return Promise.reject({status: 422, errorsRaw: errors, errors: errors.reduce(error => error)})
        }

        console.error(error)

        return Promise.reject({status: error.response?.status, errors: ['Oops!']})
    })

    return api
}

export default api