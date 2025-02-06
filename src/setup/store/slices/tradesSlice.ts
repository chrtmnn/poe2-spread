import { createSlice } from "@reduxjs/toolkit";
import { Trade } from "../../types";
import { fetchTrades } from "../actions";

export type TradesSliceState = {
  trades: Trade[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string | null;
};

// Initialer State
const initialState: TradesSliceState = {
  trades: [],
  status: "idle",
  error: null,
};

const tradesSlice = createSlice({
  name: "trades",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrades.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTrades.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.trades = action.payload;
      })
      .addCase(fetchTrades.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const tradesReducer = tradesSlice.reducer;
