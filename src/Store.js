import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./MemoryRedux";

export const store = configureStore({
  reducer: {
    game: gameSlice,
  },
});
