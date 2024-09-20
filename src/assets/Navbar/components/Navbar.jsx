import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/User";
import "./Navbar.css";
import "../../../App.css";
import useLocalStorage from "use-local-storage";
import { Toggle } from "../../Toggle/Components/Toggle";

function Navbar() {
  // Get user's system color scheme preference
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // Use local storage to manage dark mode state
  const [isDarkMode, setIsDarkMode] = useLocalStorage("isDark", preference);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    // Toggle dark mode state
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Add/remove dark mode class to body based on isDarkMode state
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const { userName, setUserToken, setUserName } = useContext(UserContext);
  const navigate = useNavigate();

  // Function to handle user logout
  const logout = () => {
    localStorage.removeItem("userToken");
    setUserToken(null);
    setUserName(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg  position-fixed top-0 w-100 z-3 bg28 SizeNav">
      <NavLink className="navbar-brand" to="/">
        <img
          src="Images/MainLogo/MainLogo.png"
          alt="logo"
          style={{ height: "50px" }}
          className="ms-3 hover-animation"
        />
      </NavLink>

      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold sizeNavUl ">
            <li className="nav-item ">
              <NavLink className="nav-link me-1" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown ">
              <NavLink
                className="nav-link dropdown-toggle me-1 "
                aria-current="page"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Video
              </NavLink>
              <ul
                className="dropdown-menu custom-dropdown"
                aria-labelledby="navbarDropdown"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <li key={num}>
                    <NavLink
                      className="dropdown-item custom-dropdown-item"
                      to={`/Video${num}`}
                    >
                      Video {num}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <hr className="dropdown-divider custom-dropdown-divider" />
                </li>
              </ul>
            </li>
            {userName ? (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link me-1"
                    aria-current="page"
                    to="/Meals"
                  >
                    Meals
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link me-1" to="/Aboutus">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link me-1" to="/Profile">
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item" onClick={logout}>
                  <NavLink className="nav-link me-1" to="/logout">
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link me-1" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link me-1" to="/register">
                    Signup
                  </NavLink>
                </li>
              </>
            )}
            <div className="d-flex align-items-center ms-lg-3">
              <form className="d-flex me-3" role="search">
                <input
                  className="form-control me-3 borderNav"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </ul>
        </div>
      </div>
      <div className="" data-theme={isDarkMode ? "dark" : "light"}>
        <Toggle isChecked={isDarkMode} handleChange={toggleDarkMode} />
      </div>
    </nav>
  );
}

export default Navbar;
