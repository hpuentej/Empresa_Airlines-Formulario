import { create } from 'zustand';

interface CounterState {  
  nombres: string;
  apellidos: string;
}

export const useClientStore = create<CounterState>(() => ({  
  nombres: 'Hans Junior',
  apellidos: 'Puente Jara',
}))
