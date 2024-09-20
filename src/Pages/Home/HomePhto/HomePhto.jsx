import { useEffect } from "react";
import styles from "./HomePhto.module.css";
import useLocalStorage from "use-local-storage";
import { Toggle } from "../../../assets/Toggle/Components/Toggle";
function HomePhto() {
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
        className={`${styles.photosContainer} ${styles.logosContainer} ${
          isDarkMode ? styles.darkMode : ""
        }`}
      >
        <h1 className={styles.NameTitle}>About The Channel</h1>

        <div className={styles.photoGroup}>
          <h1>Our Chefs</h1>
          <div className={styles.photoWrapper}>
            <img
              src="./Images/Home/H4.jpg"
              alt="phto"
              className={styles.photo}
            />
            <img
              src="./Images/Home/H5.jpg"
              alt="phto"
              className={styles.photo}
            />
            <img
              src="./Images/Home/H6.jpg"
              alt="phto"
              className={styles.photo}
            />
            <img
              src="./Images/Home/H7.jpg"
              alt="phto"
              className={styles.photo}
            />
          </div>
        </div>
        <div className={styles.photoGroup}>
          <h1> MealMaster TV-Channel </h1>
          <div className={styles.photoWrapper}>
            <img
              src="./Images/Home/H25.jpg"
              alt="phto"
              className={styles.photo}
            />
            <img
              src="./Images/Home/H26.jpg"
              alt="phto"
              className={styles.photo}
            />
            <img
              src="./Images/Home/H27.jpg"
              alt="phto"
              className={styles.photo}
            />
            <img
              src="./Images/Home/H28.jpg"
              alt="phto"
              className={styles.photo}
            />
          </div>
        </div>
        <div className={styles.photoGroup}>
          <h1>MealMaster Studio</h1>
          <div className={styles.photoWrapper}>
            <img
              src="./Images/Home/H34.jpg"
              alt="phto"
              className={styles.photo}
            />
            <img
              src="./Images/Home/H35.jpg"
              alt="phto"
              className={styles.photo}
            />
            <img
              src="./Images/Home/H36.jpg"
              alt="phto"
              className={styles.photo}
            />
            <img
              src="./Images/Home/H37.jpg"
              alt="phto"
              className={styles.photo}
            />
          </div>
        </div>
      </div>
      <div data-theme={isDarkMode ? "dark" : "light"}>
        <Toggle isChecked={isDarkMode} handleChange={toggleDarkMode} />
      </div>
    </>
  );
}

export default HomePhto;
