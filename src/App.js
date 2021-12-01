import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { auth, onAuthStateChanged } from "./firebase";
import "./App.css";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import LoginScreen from "./Components/LoginScreen/LoginScreen";
import ProfileScreen from "./Components/ProfileScreen/ProfileScreen";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/user/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // login
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // logout
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        <Route path="/profile" element={!user ? "" : <ProfileScreen />} />
        <Route path="/" element={!user ? <LoginScreen /> : <HomeScreen />} />
      </Routes>
    </div>
  );
}

export default App;
