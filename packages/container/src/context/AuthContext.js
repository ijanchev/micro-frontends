import React from "react";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext();
AuthContext.displayName = "ContainerAuthContext";

export const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  if (!context)
    throw new Error(
      "You cannot use AuthContext value outside AuthContext provider"
    );
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  const history = useHistory();

  React.useEffect(() => {
    if (isSignedIn) history.push("/dashboard");
  }, [isSignedIn]);

  const value = React.useMemo(
    () => ({
      isSignedIn,
      signIn: () => setIsSignedIn(true),
      signOut: () => setIsSignedIn(false),
    }),
    [isSignedIn]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
