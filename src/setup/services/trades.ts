import { collection, getDocs } from "firebase/firestore";
import firestore from "../firebase";

const tradesRef = collection(firestore, "trades"); //.withConverter(currencyConverter);

export const getTrades = async () => {
  const querySnapshot = await getDocs(tradesRef);
  const trades = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return trades;
};

export default getTrades;
