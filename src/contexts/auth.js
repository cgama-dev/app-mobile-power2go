import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as serviceAuth from '../services/auth';

const AuthDataContext = {
  signed: false,
  user: {},
  signIn: () => new Promise(),
  signOut: () => {},
};

const AuthContext = createContext(AuthDataContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadStoragedData() {
      const userStorage = await AsyncStorage.getItem('@auth:user');
      const tokenStorage = await AsyncStorage.getItem('@auth:token');

      if (userStorage && tokenStorage) {
        setUser(JSON.parse(userStorage));
      }
    }
    loadStoragedData();
  }, []);

  async function signIn() {
    const authResponse = await serviceAuth.signIn();
    setUser(authResponse.user);

    await AsyncStorage.setItem('@auth:user', JSON.stringify(authResponse.user));
    await AsyncStorage.setItem('@auth:token', authResponse.token);
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
