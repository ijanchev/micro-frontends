import React from "react";

const AuthContext = React.createContext();

export const AuthProvider = ({ children, auth }) => {
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  if (!context)
    throw new Error(
      "You cannot use AuthContext value outside AuthContext provider"
    );
  return context;
};
