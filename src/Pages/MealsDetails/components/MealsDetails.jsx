import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./MealsDetails.module.css";
import Loader from "../../Loader/components/Loader";
const MealsDetails = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`
        );
        const data = await response.json();
        setRecipe(data.recipe);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching the recipe details:", error);
        setLoader(false);
      }
    };

    fetchRecipeDetails();
  }, [recipeId]);

  return (
    <>
      <div className={styles.details}>
        {loader ? (
          <Loader />
        ) : recipe ? (
          <>
            <h1>{recipe.title}</h1>
            <div className={styles.mealDetailsImage}>
              <img
                src={recipe.image_url}
                alt={recipe.title}
                className={styles.recipeImage}
              />
            </div>
            <p>{recipe.ingredients}</p>
            <div className="publisher">
              <p>{recipe.publisher}</p>
              <a
                href={recipe.publisher_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn about the role of a Content Creator.
              </a>
            </div>
            <a
              href={recipe.source_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Recipe
            </a>
          </>
        ) : (
          <p>Recipe not found.</p>
        )}
      </div>
    </>
  );
};

export default MealsDetails;
