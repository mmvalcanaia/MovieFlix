import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import history from "../../util/history";
import {
  getTokenData,
  isAuthenticated,
  removeAuthDataFromLocalStorage,
  TokenData,
} from "../../util/requests";
import "./styles.css";

type AuthData = {
  authenticated: boolean;
  tokenData?: TokenData;
};

const Navbar = () => {
  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthData({
        authenticated: false,
      });
    }
  }, []);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthDataFromLocalStorage();
    setAuthData({
      authenticated: false,
    });
    history.replace("/");
  };

  return (
    <nav className="navbar bg-primary">
      <div className="navbar-container">
        <Link to="/" className="navbar-title">
          MovieFlix
        </Link>
        <div>
          {authData.authenticated && (
            <Link className="logout" to="/" onClick={handleLogoutClick}>
              SAIR
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
