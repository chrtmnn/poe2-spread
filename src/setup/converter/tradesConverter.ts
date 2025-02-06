import { doc, QueryDocumentSnapshot } from "firebase/firestore";
import db from "../firebase";
import { FirebaseTrade, Trade } from "../types";

export const tradesConverter = {
  toFirestore(trade: Trade): FirebaseTrade {
    const currency = doc(db, "users", trade.currency);
    return { ...trade, currency };
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): Trade {
    const { currency, quantity } = snapshot.data() as FirebaseTrade;
    return { id: snapshot.id, currency: currency.id, quantity };
  },
};

export default tradesConverter;
