import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../../setup/store/slices/userSlice";
import { RootState, AppDispatch } from "../../setup/store";

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, status, error } = useSelector(({ user }: RootState) => user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Willkommen, {user.email}</p>
          <button onClick={() => dispatch(logoutUser())}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Passwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={status === "loading"}>
            Login
          </button>
        </form>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
