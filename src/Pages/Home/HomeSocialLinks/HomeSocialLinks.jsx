import { useEffect } from "react";
import "./HomeSocialLinks.css";
import useLocalStorage from "use-local-storage";
import { Toggle } from "../../../assets/Toggle/Components/Toggle";
function HomeSocialLinks() {
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
  return (
    <>
      <div className={`icon logosContainer ${isDarkMode ? "darkMode" : ""}`}>
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-facebook" aria-hidden="true" />
              <span> - Facebook</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter" aria-hidden="true" />
              <span> - Twitter</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-google-plus" aria-hidden="true" />
              <span> - Google</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-instagram" aria-hidden="true" />
              <span> - Instagram</span>
            </a>
          </li>
        </ul>
      </div>
      <div data-theme={isDarkMode ? "dark" : "light"}>
        <Toggle isChecked={isDarkMode} handleChange={toggleDarkMode} />
      </div>
    </>
  );
}

export default HomeSocialLinks;
