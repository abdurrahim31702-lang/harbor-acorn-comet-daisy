import { create } from "zustand";

type StudioState = {
  ready: boolean;
  soundOn: boolean;
  menuOpen: boolean;
  section: string;
  serviceId: string;
  setReady: (v: boolean) => void;
  setSoundOn: (v: boolean) => void;
  setMenuOpen: (v: boolean) => void;
  setSection: (v: string) => void;
  setServiceId: (v: string) => void;
};

export const useStudio = create<StudioState>((set) => ({
  ready: false,
  soundOn: false,
  menuOpen: false,
  section: "home",
  serviceId: "design",
  setReady: (ready) => set({ ready }),
  setSoundOn: (soundOn) => set({ soundOn }),
  setMenuOpen: (menuOpen) => set({ menuOpen }),
  setSection: (section) => set({ section }),
  setServiceId: (serviceId) => set({ serviceId }),
}));
