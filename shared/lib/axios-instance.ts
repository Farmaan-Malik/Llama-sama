import axios from 'axios'
import { useAuthStore } from '../store/auth.store'

export const baseURL = process.env.EXPO_PUBLIC_BASE_URL

const api = axios.create({
  baseURL: baseURL,
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
