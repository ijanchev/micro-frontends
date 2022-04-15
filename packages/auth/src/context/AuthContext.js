import React from "react";

const AuthContext = React.createContext();
AuthContext.displayName = "AuthContext";

export const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  if (!context)
    throw new Error(
      "You cannot use AuthContext value outside AuthContext provider"
    );
  return context;
};

export const AuthProvider = ({ children, auth }) => {
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
