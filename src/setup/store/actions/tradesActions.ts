import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { tradesConverter } from "../../converter";
import db from "../../firebase";
import { User } from "../../types";

const tradesRef = collection(db, "trades");

// Async Thunk für das Laden der Daten aus Firebase
export const fetchTrades = createAsyncThunk(
  "trades/fetchTrades",
  async (user: User) => {
    const q = query(tradesRef, where("uid", "==", user.uid)).withConverter(
      tradesConverter
    );
    console.log("fetch");
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => doc.data());
  }
);
