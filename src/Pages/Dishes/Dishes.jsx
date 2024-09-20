/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "./Dishes.css";
import Loader from "../Loader/components/Loader";
import useLocalStorage from "use-local-storage";
import { Toggle } from "../../assets/Toggle/Components/Toggle";

function Dishes() {
  const [hasProducts, setHasProducts] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loader, setLoader] = useState(true);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "pizza";

  const itemsPerPage = 12;

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentRecipes = recipes.slice(offset, offset + itemsPerPage);

  const getRecipes = async () => {
    try {
      const { data } = await axios.get(
        `https://forkify-api.herokuapp.com/api/search?q=${query}`
      );
      setRecipes(data.recipes);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoader(false); 
    }
  };

 
  useEffect(() => {
    getRecipes();
  }, [query]);

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

  // Conditional logic can be inside useEffect but not hooks themselves
  useEffect(() => {
    // Check if products are available
    setHasProducts(currentRecipes && currentRecipes.length > 0);
  }, [currentRecipes]);

  if (loader) {
    return <Loader />;
  }

  return (
    <>
      <div className="dishesHeader">
        <div className="backIcon">
          <Link to="/">
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

        <div className="dishesTitle">
          <div className="dishesHeaderImg">
            <img
              src="Images/DishesHeader/DishesHeader1.jpg"
              alt="Dishes Header"
            />
            <div className="dishesTitleOverlay">
              <h1>Dishes</h1>
              <p>Your Favorite Meal Specially For You</p>
            </div>
          </div>
        </div>
      </div>

      <div className="dishesContainer">
        <div className="dishes">
          {hasProducts ? (
            currentRecipes.map((recipe) => (
              <div
                key={recipe.recipe_id}
                className={`dish-card logosContainer ${
                  isDarkMode ? "darkMode" : ""
                }`}
              >
                <img
                  className="dishesImg"
                  src={recipe.image_url}
                  alt={recipe.title}
                />
                <div className="dish-content">
                  <h2 className={`dishcard ${isDarkMode ? "darkMode" : ""}`}>
                    {recipe.title}
                  </h2>
                  <p className={`dishcard ${isDarkMode ? "darkMode" : ""}`}>
                    Experience the exquisite flavors of this dish. Dive into the
                    full recipe to discover how to recreate this delightful meal
                    at home.
                  </p>
                  <Link
                    to={`/DishesDetails/${recipe.recipe_id}`}
                    className={`dishcard show-recipe-link ${
                      isDarkMode ? "darkMode" : ""
                    }`}
                  >
                    Show Recipe
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      style={{ fill: "#ff6cab" }}
                    >
                      <path d="M10.296 7.71L14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z" />
                      <path d="M6.704 6.29L5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <img
              className="text-center mx-auto d-block mb-3"
              style={{ maxWidth: "50%" }}
              src="Images/DishesHeader/nodishesavailable.png"
              alt="No products available"
            />
          )}
        </div>
      </div>

      <div data-theme={isDarkMode ? "dark" : "light"}>
        <Toggle isChecked={isDarkMode} handleChange={toggleDarkMode} />
      </div>
    </>
  );
}

export default Dishes;
