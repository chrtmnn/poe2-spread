import { configureStore } from "@reduxjs/toolkit";
import { tradesReducer } from "./slices/tradesSlice";
import { userReducer } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    trades: tradesReducer,
    user: userReducer,
  },
});

// Typen für Redux Store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
