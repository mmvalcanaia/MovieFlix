import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <div className="navbar-container">
        <Link to="/">MovieFlix</Link>
        <button className="btn-logout">SAIR</button>
      </div>
    </nav>
  );
};

export default Navbar;
