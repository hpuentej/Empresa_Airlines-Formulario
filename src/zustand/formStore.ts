// Manejo de estado global del formulario

import { create } from "zustand";

interface formState {
  count: number;
  passengers: number;
  visibility: boolean;
  // message: string;
  clients: {
    id: number;
    nombres: string;
    apellidos: string;
    nacionalidad: string;
    tipoDocumento: string;
    numeroDocumento: string | number;
  }[];
  increment: () => void;
  decrement: () => void;
  toggle: () => void;  
  addClient: (client: { id:number ; nombres: string; apellidos: string; nacionalidad: string; tipoDocumento: string; numeroDocumento:string | number; }) => void;
  setClients: (newClients: { id: number; nombres: string; apellidos: string; nacionalidad: string; tipoDocumento: string; numeroDocumento: string | number; }[]) => void;
}

export const usePassengerStore = create<formState>((set, get) => ({
  count: 1,
  passengers: 1,
  visibility: false,
  clients: [],
  increment: () =>
    set((state) => {
      return { ...state, count: get().count + 1 };
    }),
  decrement: () => set((state) => ({ ...state, count: get().count - 1 })),
  toggle: () =>
    set((state) => ({
      ...state,
      visibility: !get().visibility,
      passengers: get().count,
    })),
  addClient: (client) => set((state) => ({ ...state, clients: [...get().clients, client]})),
  setClients: (newClients) => set((state) => ({ ...state, clients: newClients})),
}));
