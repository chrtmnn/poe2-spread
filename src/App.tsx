import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout";
import Login from "./components/Login";
import { AppDispatch, RootState } from "./setup/store";
import { fetchTrades } from "./setup/store/actions";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { trades, status, error } = useSelector(
    ({ trades }: RootState) => trades
  );
  const { user } = useSelector(({ user }: RootState) => user);

  React.useEffect(() => {
    if (user) {
      dispatch(fetchTrades(user));
    }
  }, [dispatch, user]);

  return (
    <Layout>
      <div style={{ padding: 24 }}>
        <h1>Welcome to the site!</h1>
        <p>This is the main content area.</p>
        <Login />
        <p>
          <button
            onClick={() => {
              if (user) dispatch(fetchTrades(user));
              console.log({ trades, status, error });
            }}
          >
            reload data
          </button>
        </p>
        <p>{JSON.stringify(user)}</p>
        <p>{JSON.stringify(trades)}</p>
      </div>
    </Layout>
  );
};

export default App;
