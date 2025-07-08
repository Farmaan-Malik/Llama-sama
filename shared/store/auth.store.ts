import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { zustandStorage } from '../storage/mmkvStorage'


interface AuthState {
  token: string | null
  isFirstTimeUser:boolean
  username:string
  userId:string
  setUserId:(id:string)=>void
  updateFirstTime:()=>void
  setToken: (token: string) => void
  removeToken: () => void
  setUsernameInStore:(username:string)=>void
  getToken: () => string
  clearStore:()=>void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      isFirstTimeUser:true,
      username:'',
      userId:'',
      setUserId:(id:string)=>set({userId:id}),
      setToken: (token) => set({ token }),
      setUsernameInStore:(username)=>set({username}),
      removeToken: () => set({ token: null }),
      clearStore:()=>set({token:null,username:''}),
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
