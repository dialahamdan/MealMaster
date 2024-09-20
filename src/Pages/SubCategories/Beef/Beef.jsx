/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../Loader/components/Loader";
import "../Style/SubCategories.css";
function Beef() {
  const [recipes, setRecipes] = useState([]);
  const [loader, setLoader] = useState(true);
  const getBeef = async (recipe) => {
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
    getBeef();
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
          <h1>Beef Dishes</h1>
          <div className="line"></div>
          <p>
            All dishes in this section are beef based, including cow, lamb,
            goat, and processed meat!
          </p>
        </div>
      </div>

      <div className=" categoriesDetails">
        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Beef/fajitas.png"
              alt="Fajitas"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Fajitas</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>
            <Link to={`/Dishes?q=Fajitas`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img src="Images/Beef/beef.png" alt="Beef" className="circle-img" />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Beef</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>
            <Link to={`/Dishes?q=Beef`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img src="Images/Beef/bbq.png" alt="BBQ" className="circle-img" />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>BBQ</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>
            <Link to={`/Dishes?q=BBQ`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img src="Images/Beef/goat.png" alt="Goat" className="circle-img" />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Goat</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>
            <Link to={`/Dishes?q=Goat`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Beef/kebab.png"
              alt="Kebab"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Kebab</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Kebab`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img src="Images/Beef/lamb.png" alt="Lamb" className="circle-img" />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Lamb</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Lamb`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Beef/pepperoni.png"
              alt="Pepperoni"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Pepperoni</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Pepperoni`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img src="Images/Beef/ribs.png" alt="Ribs" className="circle-img" />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Ribs</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Ribs`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Beef/salami.png"
              alt="Salami"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Salami</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Salami`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsLightBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Beef/sausage.png"
              alt="Sausage"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Sausage</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Sausage`}>
              <button>details</button>
            </Link>
          </div>
        </div>

        <div className="CategoryDetailsSection CategoryDetailsDarkBgImg">
          <div className="CategoryDetailsImg">
            <img
              src="Images/Beef/steak.png"
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
              src="Images/Beef/tacos.png"
              alt="Tacos"
              className="circle-img"
            />
          </div>
          <div className="CategoryDetailsInfo">
            <h3>Tacos</h3>
            <h4>your favorite dish </h4>
            <div className="h4-line"></div>
            <p>Click the button bellow to see more ideas ! </p>

            <Link to={`/Dishes?q=Tacos`}>
              <button>details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beef;
