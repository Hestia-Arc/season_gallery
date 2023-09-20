import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState({});

  const userLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      localStorage.setItem("loggedIn", true);
      console.log(userCredential);
    } catch (error) {
      console.log(error);
    }
  };

  const userLogout = () => {
    try {
      signOut(auth);
      localStorage.removeItem("loggedIn");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      console.log("Current user:  " + user);
      setAuthUser(user);
    });

    return () => {
      listen();
    };
  }, []);

  return (
    <UserContext.Provider value={{ userLogin, authUser, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};

// {authUser ? (
//   <>
//     <p>{`Signed in as ${authUser.email}`}</p>
//     <button>Sign out</button>
//   </>
// ) : (
//   <p>Signed out</p>
// )}
