/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../../Loader/components/Loader";
import "../Style/SubCategories.css";

function Chicken() {
  const [recipes, setRecipes] = useState([]);
  const [loader, setLoader] = useState(true);
  const getChicken = async (recipe) => {
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
    getChicken();
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
          <h1>Chicken Dishes</h1>
          <div className="line"></div>
          <p>
            All dishes in this section are white meet based, including chicken,
            duck and roast !
          </p>
        </div>
      </div>

      <div className=" categoriesDetails">
        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Chicken/bunny chow.png"
              alt="Bunny Chow"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Bunny Chow</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>
            <Link to={`/Dishes?q=Bunny Chow`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Chicken/champ.png"
              alt="Champ"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Champ</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>
            <Link to={`/Dishes?q=Champ`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Chicken/chicken.png"
              alt="Chicken"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Chicken</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>
            <Link to={`/Dishes?q=Chicken`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Chicken/curry.png"
              alt="Curry"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Curry</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>
            <Link to={`/Dishes?q=Curry`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Chicken/duck.png"
              alt="Duck"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Duck</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Duck`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Chicken/marzipan.png"
              alt="Marzipan"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Marzipan</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Marzipan`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Chicken/masala.png"
              alt="Masala"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Masala</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Masala`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Chicken/pierogi.png"
              alt="Pierogi"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Pierogi</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Pierogi`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Chicken/rendang.png"
              alt="Rendang"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Rendang</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Rendang`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Chicken/tofu.png"
              alt="Tofu"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Tofu</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Tofu`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Chicken/steak.png"
              alt="Steak"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Steak</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Steak`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Chicken/turkey.png"
              alt="Turkey"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Turkey</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Turkey`}>
              <button>details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chicken;
