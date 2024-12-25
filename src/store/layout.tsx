import { create } from 'zustand'

type AsideMenuState = {
  isAsideMenuOpened: boolean;
  isAsideProfileMenuOpened: boolean;
  actions: {
    toggleAsideMenu: () => void;
    toggleAsideProfileMenu: () => void;
  };
}

const useAsideMenuStore = create<AsideMenuState>((set) => ({
  isAsideMenuOpened: false,
  isAsideProfileMenuOpened: false,
  actions: {
    toggleAsideMenu: () => set((state) => ({
      isAsideMenuOpened: !state.isAsideMenuOpened,
      isAsideProfileMenuOpened: false
    })),
    toggleAsideProfileMenu: () => set((state) => ({ 
      isAsideProfileMenuOpened: !state.isAsideProfileMenuOpened ,
      isAsideMenuOpened: false
    })),
  }
}));

export const useAsideMenu = () => useAsideMenuStore((state) => state.isAsideMenuOpened);
export const useAsideProfileMenu = () => useAsideMenuStore((state) => state.isAsideProfileMenuOpened);
export const useAsideMenuActions = () => useAsideMenuStore((state) => state.actions);