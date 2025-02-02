import { DocumentReference } from "firebase/firestore";
import Currency from "./Currency.types";

export type Trade = {
  id: string;
  quantity: number;
  currency: DocumentReference<Currency>;
};

export default Trade;
