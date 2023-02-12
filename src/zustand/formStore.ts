import { create } from "zustand";

interface formState {
  count: number;
  passengers: number;
  visibility: boolean;
  clients: {
    nombres: string;
    apellidos: string;
    nacionalidad: string;
    tipoDocumento: string;
    numeroDocumento: string;
  }[];
  increment: () => void;
  decrement: () => void;
  toggle: () => void;
}

export const usePassengerStore = create<formState>((set, get) => ({
  count: 1,
  passengers: 1,
  visibility: false,
  clients: [
    {
      nombres: "Alex",
      apellidos: "Tito",
      nacionalidad: "",
      tipoDocumento: "",
      numeroDocumento: "",
    },
  ],
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
}));
