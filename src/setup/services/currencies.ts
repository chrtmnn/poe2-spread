import { collection, getDocs } from "firebase/firestore";
import firestore from "../firebase";

const currenciesRef = collection(firestore, "currencies"); //.withConverter(currencyConverter);

export const getCurrencies = async () => {
  const querySnapshot = await getDocs(currenciesRef);
  const currencies = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return currencies;
};

export default getCurrencies;
