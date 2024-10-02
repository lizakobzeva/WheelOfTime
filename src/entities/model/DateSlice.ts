import { create } from "zustand";

type State = {
  currentDateId: number;
};

type Action = {
  updateCurrentDateId: (currentDateId: number) => void;
};

const useDateStore = create<State & Action>((set) => ({
  currentDateId: 0,
  updateCurrentDateId: (currentDateId: number) =>
    set(() => ({ currentDateId: currentDateId })),
}));

export default useDateStore;
