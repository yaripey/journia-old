import { create } from 'zustand'
import { ScreenName } from '../types'

interface ScreenStore {
  currentScreen: ScreenName,
  setCurrentScreen: (name: ScreenName) => void,
}

const useScreenStore = create<ScreenStore>((set) => ({
  currentScreen: ScreenName.home,
  setCurrentScreen: (name: ScreenName) => set(() => ({ currentScreen: name }))
}))

export default useScreenStore
