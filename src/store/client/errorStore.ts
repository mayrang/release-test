import { create } from 'zustand'

interface ErrorStore {
  error: null | Error
  updateError: (error: Error) => void
}

export const errorStore = create<ErrorStore>(set => ({
  error: null,
  updateError: (error: Error) => {
    set({ error: error })
  }
}))