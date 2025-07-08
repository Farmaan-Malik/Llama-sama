import axios from 'axios'
import { useAuthStore } from '../store/auth.store'

const api = axios.create({
  baseURL: 'http://192.168.29.140:8080', //wifi 5g
  // baseURL: 'http://172.20.10.2:8080', // personal
  // baseURL: 'http://192.168.240.244:8080', // nothing
  timeout: 10000,
  timeoutErrorMessage: 'Request timed out',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  async (config) => {
    const token = useAuthStore.getState().getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default api
