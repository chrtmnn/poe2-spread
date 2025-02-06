import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";
import { User } from "../../types";
import { getErrorMessage } from "../../utils";
import { AppDispatch } from "../store";
import { resetTradesState } from "./tradesSlice";

export type UserSliceState = {
  user: User | null;
  status: "idle" | "loading" | "authenticated" | "unauthenticated";
  error?: string | null;
};

// Initialer State
const initialState: UserSliceState = {
  user: null,
  status: "idle",
  error: null,
};

// Async Thunk für Login
export const loginUser = createAsyncThunk<
  User,
  { email: string; password: string }
>("user/loginUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const { uid, displayName, photoURL } = user;
    return { uid, email, displayName, photoURL };
  } catch (error) {
    return rejectWithValue(getErrorMessage(error));
  }
});

// Async Thunk für Logout
export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  await signOut(auth);
});

// User Slice erstellen
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.status = action.payload ? "authenticated" : "unauthenticated";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = "authenticated";
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "unauthenticated";
        state.error = action.payload as string;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.status = "unauthenticated";
        state.user = null;
      });
  },
});

// Auth Listener initialisieren
export const initializeAuthListener = () => (dispatch: AppDispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName, photoURL } = user;
      dispatch(setUser({ uid, email, displayName, photoURL })); // Update Redux store with user
    } else {
      dispatch(logoutUser());
      dispatch(resetTradesState());
    }
  });
};

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
