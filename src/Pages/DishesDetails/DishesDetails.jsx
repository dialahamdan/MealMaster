/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./DishesDetails.css";
import { Link } from "react-router-dom";
import Loader from "../Loader/components/Loader";
import useLocalStorage from "use-local-storage";
import { Toggle } from "../../assets/Toggle/Components/Toggle";
function DishesDetails() {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [loader, setLoader] = useState(true);
  const getRecipeDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://forkify-api.herokuapp.com/api/get?rId=${id}`
      );
      // console.log(data.recipe);
      setRecipeDetails(data.recipe);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoader(false); 
    }
  };

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

  useEffect(() => {
    getRecipeDetails();
  }, [id]);
  if (loader) {
    return <Loader />;
  }

  return (
    <>
      <div className="DishesDetailsSection">
        <div className="DishesDetailsHeader">
          <div className="backIcon">
            <Link to="/Dishes">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
                viewBox="0 0 24 24"
                className="backIconSvg"
              >
                <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z" />
              </svg>
            </Link>
          </div>

          <div className="DishesDetailsTitle text-center">
            <h1 className={`dishcard  ${isDarkMode ? "darkMode" : ""}`}>
              Dish Ingredients
            </h1>

            <p className={`dishcard  ${isDarkMode ? "darkMode" : ""}`}>
              All you need to know to make your delicious dish !
            </p>
          </div>
        </div>

        <div className="recipe-container">
          <div className="recipe-info " key={recipeDetails.recipe_id}>
            <h2
              className={`dishcard recipe-title ${
                isDarkMode ? "darkMode" : ""
              }`}
            >
              {recipeDetails.title}
            </h2>
            <h3 className={`dishcard  ${isDarkMode ? "darkMode" : ""}`}>
              The Ingredients:{" "}
            </h3>
            <p
              className={`dishcard recipe-ingredients  ${
                isDarkMode ? "darkMode" : ""
              }`}
            >
              {recipeDetails.ingredients.join(", ")}
            </p>
          </div>
          <div className="recipe-image">
            <img src={recipeDetails.image_url} alt={recipeDetails.title} />
          </div>
        </div>
      </div>
      <div data-theme={isDarkMode ? "dark" : "light"}>
        <Toggle isChecked={isDarkMode} handleChange={toggleDarkMode} />
      </div>
    </>
  );
}

export default DishesDetails;
