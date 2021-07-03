import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../images/logo.png";

function Header() {
  const [mainMenuVisible, setMainMenuVisible] = useState(true);

  const toggleMainMenu = () => {
    setMainMenuVisible(!mainMenuVisible);
  };
  let mainMenuClasses = "collapse navbar-collapse ";
  if (mainMenuVisible) {
    mainMenuClasses += " show";
  }

  let menuTogglerButtonClasses = "navbar-toggler";
  if (!mainMenuVisible) {
    menuTogglerButtonClasses += " collapsed";
  }

  return (
    <div>
      <nav className="navbar form-inline-end navbar-expand-lg navbar-light bg-light ">
        <NavLink exact to="/">
          <img src={logo} width="120" height="40" alt="logo" />
        </NavLink>
        <div className="container-fluid form-inline">
          <button
            onClick={toggleMainMenu}
            className={menuTogglerButtonClasses}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={mainMenuClasses} id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <NavLink className="nav-link " exact to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/article">
                Categories
              </NavLink>
              <NavLink className="nav-link" to="/cart">
                Cart
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;