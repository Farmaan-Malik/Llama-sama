// shared/storage/zustandStorage.ts
import { MMKV } from 'react-native-mmkv'
import type { StateStorage } from 'zustand/middleware'

const mmkv = new MMKV()

export const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    mmkv.set(name, value)
    return Promise.resolve()
  },
  getItem: (name) => {
    const value = mmkv.getString(name)
    return Promise.resolve(value ?? null)
  },
  removeItem: (name) => {
    mmkv.delete(name)
    return Promise.resolve()
  },
}
