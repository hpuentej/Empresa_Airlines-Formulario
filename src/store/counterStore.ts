import { create } from 'zustand';

interface CounterState {
  count: number;
  nombres: string;
  apellidos: string;
}

export const useCounterStore = create<CounterState>(() => ({
  count: 57,
  nombres: 'Hans Junior',
  apellidos: 'Puente Jara',
}))
