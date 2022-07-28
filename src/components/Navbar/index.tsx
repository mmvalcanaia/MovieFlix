import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import history from "../../util/history";
import {
  getTokenData,
  isAuthenticated,
  removeAuthDataFromLocalStorage,
} from "../../util/requests";
import "./styles.css";

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData ]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthDataFromLocalStorage();
    setAuthContextData({
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
          {authContextData.authenticated && (
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
