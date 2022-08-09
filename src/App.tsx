import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { AuthContext, AuthContextData } from "./AuthContext";
import Routes from "./Routes";

import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import "./assets/styles/custom.scss";

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
        <Routes />
        <ToastContainer />
    </AuthContext.Provider>
  );
}

export default App;
