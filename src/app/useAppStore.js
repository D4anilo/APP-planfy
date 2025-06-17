import { create } from 'zustand';

const useAppStore = create((set) => ({
  diaSelecionado: new Date().getDay(), // valor inicial = hoje
  setDiaSelecionado: (index) => set({ diaSelecionado: index }),
}));

export default useAppStore;
