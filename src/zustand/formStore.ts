import { create } from 'zustand';

interface formState {
  count: number
  visibility: boolean
  clients: string[]
}

export const usePassengerStore = create<formState>(() => ({
  count: 1,
  visibility: true,
  clients: [],
}))
