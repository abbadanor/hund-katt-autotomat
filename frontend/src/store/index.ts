// stores/counter.js
import { defineStore } from 'pinia'

interface RootStore {
  perpetual: boolean | null
  feedingsPerDay: number | null
  dates: String[] | null // 06:00, 12:00, 17:30 osv... (tider på en dag)
}

export const useStore = defineStore('main', {
  state: () => {
    return {
      perpetual: null,
    } as RootStore
  },
})
