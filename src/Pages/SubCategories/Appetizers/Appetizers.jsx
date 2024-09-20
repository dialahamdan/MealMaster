/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../Style/SubCategories.css";
import Loader from "../../Loader/components/Loader";
function Appetizers() {
  const [recipes, setRecipes] = useState([]);
  const [loader, setLoader] = useState(true);
  const getAppetizers = async () => {
    try {
      const { data } = await axios.get(
        "https://forkify-api.herokuapp.com/api/search?q=appetizers"
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
    getAppetizers();
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
          <h1>Appetizers</h1>
          <div className="line"></div>
          <p>All Appetizers you like , in one websit !</p>
        </div>
      </div>

      <div className=" categoriesDetails">
        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Appetizers/arepas.png"
              alt="Arepas"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Arepas</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>
            <Link to={`/Dishes?q=Arepas`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Appetizers/chips.png"
              alt="Chips"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Chips</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>
            <Link to={`/Dishes?q=Chips`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Appetizers/fries.png"
              alt="Fries"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Fries</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>
            <Link to={`/Dishes?q=Fries`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Appetizers/hummus.png"
              alt="Hummus"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Hummus</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>
            <Link to={`/Dishes?q=Hummus`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Appetizers/ketchup.png"
              alt="Ketchup"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Ketchup</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Ketchup`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Appetizers/maple syrup.png"
              alt="Maple Syrup"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Maple Syrup</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Maple Syrup`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Appetizers/popcorn.png"
              alt="Popcorn"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Popcorn</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Popcorn`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Appetizers/poutine.png"
              alt="Poutine"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Poutine</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Poutine`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Appetizers/salad.png"
              alt="Salad"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Salad</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Salad`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Appetizers/toast.png"
              alt="Toast"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Toast</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Toast`}>
              <button>details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appetizers;
