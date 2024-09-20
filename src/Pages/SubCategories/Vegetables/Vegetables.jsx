/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../Loader/components/Loader";
import "../Style/SubCategories.css";

function Vegetables() {
  const [recipes, setRecipes] = useState([]);
  const [loader, setLoader] = useState(true);
  const getVegetables = async (recipe) => {
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

  // This useEffect will not trigger getVegetables initially, we will call it only on button click
  useEffect(() => {
    // Optionally, you can fetch default recipes here
    getVegetables("default");
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
          <h1>Vegetable Dishes</h1>
          <div className="line"></div>
          <p>
            All dishes in this section are based on vegetables, including
            Artichoke, Broccoli, Carrot, and much more!
          </p>
        </div>
      </div>

      <div className="categoriesDetails">
        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/artichoke.png"
              alt="Artichoke"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Artichoke</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Artichoke`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/asparagus.png"
              alt="Asparagus"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Asparagus</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Asparagus`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/beetroot.png"
              alt="Beetroot"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Beetroot</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Beetroot`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/broccoli.png"
              alt="Broccoli"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Broccoli</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Broccoli`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/brussel sprouts.png"
              alt="Brussel Sprouts"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Brussel Sprouts</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Brussel Sprouts`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/cabbage.png"
              alt="Cabbage"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Cabbage</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Cabbage`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/carrot.png"
              alt="Carrot"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Carrot</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Carrot`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/cauliflower.png"
              alt="Cauliflower"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Cauliflower</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Cauliflower`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/celery.png"
              alt="Celery"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Celery</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Celery`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/chili.png"
              alt="Chili"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Chili</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Chili`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/corn.png"
              alt="Corn"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Corn</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Corn`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/cucumber.png"
              alt="Cucumber"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Cucumber</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Cucumber`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/garlic.png"
              alt="Garlic"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Garlic</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Garlic`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/green bean.png"
              alt="Green Bean"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Green Bean</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Green Bean`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/green pepper.png"
              alt="Green Pepper"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Green Pepper</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Green Pepper`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/leek.png"
              alt="Leek"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Leek</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Leek`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/lettuce.png"
              alt="Lettuce"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Lettuce</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Lettuce`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/mushrooms.png"
              alt="Mushrooms"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Mushrooms</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Mushrooms`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/onion.png"
              alt="Onion"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Onion</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Onion`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/peas.png"
              alt="Peas"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Peas</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Peas`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/Potato.png"
              alt="Potato"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Potato</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Potato`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/pumpkin.png"
              alt="Pumpkin"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Pumpkin</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Pumpkin`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/radish.png"
              alt="Radish"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Radish</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Radish`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/red pepper.png"
              alt="Red Pepper"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Red Pepper</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Red Pepper`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/sweet potato.png"
              alt="Sweet Potato"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Sweet Potato</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Sweet Potato`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/tomato.png"
              alt="Tomato"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Tomato</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Tomato`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/vegetables/zucchini.png"
              alt="Zucchini"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Zucchini</h3>
            <h4>Your favorite dish</h4>
            <div className="h4-line"></div>
            <p>Click the button below to see more ideas!</p>
            <Link to={`/Dishes?q=Zucchini`}>
              <button>details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vegetables;
