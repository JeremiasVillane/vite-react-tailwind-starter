import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import type { State } from "./type";

const useCounterStore = create(
  persist<State>(
    (set) => ({
      count: 0,
      increaseCount: () =>
        set((state) => {
          return {
            ...state,
            count: state.count + 1,
          };
        }),
      decreaseCount: () =>
        set((state) => {
          if (state.count === 0) return state;
          return {
            ...state,
            count: state.count - 1,
          };
        }),
      resetCount: () =>
        set((state) => ({
          ...state,
          count: 0,
        })),
    }),
    {
      name: "counter-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCounterStore;
