import { DocumentReference } from "firebase/firestore";
import Currency from "./Currency.types";

export type Trade = {
  id: string;
  quantity: number;
  currency: Currency["id"];
};

export type FirebaseTrade = Omit<Trade, "currency"> & {
  currency: DocumentReference;
};

export default Trade;
