import { create } from 'zustand';

interface UserState {
  userAuth: boolean;
  setUserAuthStore: (result: boolean) => void;
}

export const useStore = create<UserState>((set) => ({
  userAuth: false,
  setUserAuthStore: (result) => set({ userAuth: result }),
}));
