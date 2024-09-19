import AuthProvider from "./hooks/authContext";
import Routes from "./routes";

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
