import { useState } from "react";
import "./App.css";
import "./assets/styles/custom.scss";
import { AuthContext, AuthContextData } from "./AuthContext";
import Routes from "./Routes";

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <div className="App">
        <Routes />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
