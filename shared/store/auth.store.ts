import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { zustandStorage } from '../storage/mmkvStorage'


interface AuthState {
  token: string | null
  isFirstTimeUser:boolean
  updateFirstTime:()=>void
  setToken: (token: string) => void
  removeToken: () => void
  getToken: () => string
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      isFirstTimeUser:true,
      setToken: (token) => set({ token }),
      removeToken: () => set({ token: null }),
      getToken: () => {
          const token = get().token
          if (!token) {
            console.warn('No auth token found')
          }
          return token ?? ''
        },
      updateFirstTime:()=>set({isFirstTimeUser:false})
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
)
