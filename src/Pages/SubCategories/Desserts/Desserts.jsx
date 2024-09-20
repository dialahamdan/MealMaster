/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../../Loader/components/Loader";
import "../Style/SubCategories.css";
function Desserts() {
  const [recipes, setRecipes] = useState([]);
  const [loader, setLoader] = useState(true);
  const getDesserts = async (recipe) => {
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

  useEffect(() => {
    // Optionally, you can fetch default recipes here
    getDesserts();
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
          <h1>Desserts</h1>
          <div className="line"></div>
          <p>The best desserts to satisfy your sweet tooth !</p>
        </div>
      </div>

      <div className=" categoriesDetails">
        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/desserts/cake.png"
              alt="Cake"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Cake</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>
            <Link to={`/Dishes?q=Cake`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/desserts/chocolate.png"
              alt="Chocolate"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Chocolate</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>
            <Link to={`/Dishes?q=Chocolate`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/desserts/croissant.png"
              alt="Croissant"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Croissant</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>
            <Link to={`/Dishes?q=Croissant`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/desserts/donuts.png"
              alt="Donuts"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Donuts</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>
            <Link to={`/Dishes?q=Donuts`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/desserts/ice cream.png"
              alt="Ice Cream"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Ice Cream</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Ice Cream`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/desserts/pie.png"
              alt="Pie"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Pie</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Pie`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/desserts/pudding.png"
              alt="Pudding"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Pudding</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Pudding`}>
              <button>details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desserts;
