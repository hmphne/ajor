import { useEffect, useState } from "react";
import AuthProvider from "./hooks/authProvider";
import Routes from "./routes";

const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline ? (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  ) : (
    <div>
      <h1>You are offline</h1>
      <p>Please check your internet connection.</p>
    </div>
  );
};

export default App;
