import { TOKEN_KEY } from "@/lib/constants";
import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";

const AuthContext = createContext(undefined);

const AuthProvider = ({ children }) => {
  const [token, setToken_] = useState(localStorage.getItem(TOKEN_KEY));

  const setToken = useCallback((newToken) => {
    setToken_(newToken);
    if (newToken) {
      localStorage.setItem(TOKEN_KEY, newToken);
    } else {
      localStorage.removeItem(TOKEN_KEY);
    }
  }, []);

  const removeToken = useCallback(() => {
    setToken_(null);
    localStorage.removeItem(TOKEN_KEY);
  }, []);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["token"] = token;
    } else {
      delete axios.defaults.headers.common["token"];
    }
  }, [token]);

  const contextValue = useMemo(() => {
    return {
      token,
      setToken,
      removeToken,
    };
  }, [token, setToken, removeToken]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
