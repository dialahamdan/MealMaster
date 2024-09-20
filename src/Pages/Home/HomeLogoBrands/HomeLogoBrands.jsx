import { useEffect } from "react"; // Fixed import statement
import styles from "./HomeLogoBrands.module.css";
import useLocalStorage from "use-local-storage";
import { Toggle } from "../../../assets/Toggle/Components/Toggle";

function HomeLogoBrands() {
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
      <div
        className={`${styles.logosContainer} ${
          isDarkMode ? styles.darkMode : ""
        }`}
      >
        <img
          src="Images/LogoBrands/logo7.jpeg"
          alt="logo"
          className={styles.logoImage}
        />
        <img
          src="Images/LogoBrands/logo1.jpg"
          alt="logo"
          className={styles.logoImage}
        />
        <img
          src="Images/LogoBrands/logo2.jpg"
          alt="logo"
          className={styles.logoImage}
        />
        <img
          src="Images/LogoBrands/logo5.jpeg"
          alt="logo"
          className={styles.logoImage}
        />
        <img
          src="Images/LogoBrands/logo3.jpeg"
          alt="logo"
          className={styles.logoImage}
        />
        <img
          src="Images/LogoBrands/logo6.jpeg"
          alt="logo"
          className={styles.logoImage}
        />
        <img
          src="Images/LogoBrands/logo4.jpeg"
          alt="logo"
          className={styles.logoImage}
        />
        <img
          src="Images/LogoBrands/logo10.png"
          alt="logo"
          className={styles.logoImage}
        />
        <img
          src="Images/LogoBrands/logo8.webp"
          alt="logo"
          className={styles.logoImage}
        />
        <img
          src="Images/LogoBrands/logo9.jpg"
          alt="logo"
          className={styles.logoImage}
        />
      </div>
      <div data-theme={isDarkMode ? "dark" : "light"}>
        <Toggle isChecked={isDarkMode} handleChange={toggleDarkMode} />
      </div>
    </>
  );
}

export default HomeLogoBrands;
