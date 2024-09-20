/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../Loader/components/Loader";
import "../Style/SubCategories.css";

function SeaFood() {
  const [recipes, setRecipes] = useState([]);
  const [loader, setLoader] = useState(true);
  const getSeaFood = async (recipe) => {
    try {
      const { data } = await axios.get(
        `https://forkify-api.herokuapp.com/api/search?q=${recipe}`
      );
      // console.log(data.recipes);
      setRecipes(data.recipes);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoader(false); // Hide loader when data fetch is complete (success or error)
    }
  };

  // This useEffect will not trigger getSeaFood initially, we will call it only on button click
  useEffect(() => {
    // Optionally, you can fetch default recipes here
    getSeaFood();
  }, []);
  if (loader) {
    return <Loader />;
  }

  return (
    <div>
      <div className="categoriesDetailsHeader d-flex align-items-center justify-content-between">
        <div className="backIcon">
          <Link to="/MainCategories">
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
        <div className="categoriesDetailstitle text-center">
          <h1>Sea Food Dishes</h1>
          <div className="line"></div>
          <p>
            All dishes in this section are Sea Food , including Crab, Fish,
            Lobster, and much more!
          </p>
        </div>
      </div>

      <div className=" categoriesDetails">
        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/SeaFood/crab.png"
              alt="Crab"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Crab</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>
            <Link to={`/Dishes?q=Crab`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/SeaFood/fish.png"
              alt="Fish"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Fish</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>
            <Link to={`/Dishes?q=Fish`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/SeaFood/lobster.png"
              alt="Lobster"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Lobster</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>
            <Link to={`/Dishes?q=Lobster`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/SeaFood/paella.png"
              alt="Paella"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Paella</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>
            <Link to={`/Dishes?q=Paella`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/SeaFood/seafood.png"
              alt="Sea Food"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Sea Food</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Sea Food`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/SeaFood/som tam.png"
              alt="Som Tam"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Som Tam</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Som Tam`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/SeaFood/sushi.png"
              alt="Sushi"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Sushi</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Sushi`}>
              <button>details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeaFood;
