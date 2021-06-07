import React, { useState, useContext, useEffect, createContext } from 'react';

import firebase from './firebase';

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProviderAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProviderAuth() {
  const [user, setUser] = useState(null);

  const signinWithGithub = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((res) => {
        setUser(res.user);
        return res.user;
      });
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  useEffect(() => {
    const unscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) setUser(user);
      else setUser(false);
    });
    return () => unscribe();
  });

  return {
    user,
    signinWithGithub,
    signout
  };
}
