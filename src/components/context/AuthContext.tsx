import { User } from '@firebase/auth';
import { login, logout, onUserStateChange } from 'api/firebase';
import React, { createContext, useContext, useEffect, useState } from 'react';

type CustomUser = User & {
  isAdmin: boolean;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext({ user: { isAdmin: false }, login, logout });

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    onUserStateChange((user: CustomUser) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
