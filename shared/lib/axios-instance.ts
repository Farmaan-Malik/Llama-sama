// shared/lib/axios.ts
import axios from 'axios'
import { useAuthStore } from '../store/auth.store'

const api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
  timeoutErrorMessage: 'Request timed out',
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
