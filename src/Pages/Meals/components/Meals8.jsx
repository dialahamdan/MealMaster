import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../../Loader/components/Loader";
import { Link } from "react-router-dom";
import styles from "./Meals.module.css";
import useLocalStorage from "use-local-storage";
import { Toggle } from "../../../assets/Toggle/Components/Toggle";

const items = [
  "watermelon",
  "salad",
  "pizza",
  "pasta",
  "popcorn",
  "lobster",
  "steak",
  "bbq",
  "pudding",
  "hamburger",
];

function Meals8() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 50;
  const totalPages = 6;

  const getProducts = async () => {
    setLoader(true);
    try {
      const allProducts = [];
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const { data } = await axios.get(
          `https://forkify-api.herokuapp.com/api/search?q=${item}`
        );
        allProducts.push(...data.recipes);
      }
      setProducts(allProducts);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      getProducts(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      getProducts(currentPage - 1);
    }
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    getProducts(pageNumber);
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
    getProducts(currentPage);
  }, [currentPage]);

  if (loader) {
    return <Loader />;
  }

  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <>
      <div className={styles.TotalMeals}>
        {/* sidebar */}
        <div className={`fixed-top  ${styles.MM}`}>
          <div>
            <button
              className={` ${styles.btnprimary} btn d-flex align-items-center`}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                fill="#eee"
                viewBox="0 0 512 512"
                className="me-3" // Adds margin to the right of the icon
              >
                <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z" />
              </svg>
              International Meals Collection
            </button>
          </div>

          <div
            className={`${styles.offcanvasBody} offcanvas offcanvas-start`}
            data-bs-scroll="true"
            tabIndex={-1}
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div className={styles.offcanvasHeader}>
              <h5
                className={styles.offcanvasTitle}
                id="offcanvasWithBothOptionsLabel"
              >
                Discover Traditional Meals
              </h5>
              <button
                type="button"
                className={styles.btnClose}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className={`offcanvas-body ${styles.offcanvasbody2}`}>
              <p className={styles.offcanvasParagraph}>
                Scroll down to explore a variety of meals.
              </p>
              <ul className={styles.menuList}>
                <hr />
                <li className={styles.menuItem}>
                  <Link to="/Meals" className={styles.menuLink}>
                    Mexican Meals
                  </Link>
                </li>
                <hr />
                <li className={styles.menuItem}>
                  <Link to="/Meals2" className={styles.menuLink}>
                    Indian Meals
                  </Link>
                </li>{" "}
                <hr />
                <li className={styles.menuItem}>
                  <Link to="/Meals3" className={styles.menuLink}>
                    Turkish Meals
                  </Link>
                </li>{" "}
                <hr />
                <li className={styles.menuItem}>
                  <Link to="/Meals4" className={styles.menuLink}>
                    Italian Meals
                  </Link>
                </li>{" "}
                <hr />
                <li className={styles.menuItem}>
                  <Link to="/Meals5" className={styles.menuLink}>
                    Chinese Meals
                  </Link>
                </li>{" "}
                <hr />
                <li className={styles.menuItem}>
                  <Link to="/Meals6" className={styles.menuLink}>
                    Japanese Meals
                  </Link>
                </li>{" "}
                <hr />
                <li className={styles.menuItem}>
                  <Link to="/Meals7" className={styles.menuLink}>
                    Mediterranean Meals
                  </Link>
                </li>{" "}
                <hr />
                <li className={styles.menuItem}>
                  <Link to="/Meals9" className={styles.menuLink}>
                    French Meals
                  </Link>
                </li>{" "}
                <hr />
                <li className={styles.menuItem}>
                  <Link to="/Meals10" className={styles.menuLink}>
                    Thai Meals
                  </Link>
                </li>{" "}
                <hr />
                <li className={styles.menuItem}>
                  <Link to="/Meals11" className={styles.menuLink}>
                    American Meals
                  </Link>
                </li>{" "}
                <hr />
                <li className={styles.menuItem}>
                  <Link to="/Meals12" className={styles.menuLink}>
                    Spanish Meals
                  </Link>
                </li>{" "}
                <hr />
                <li className={styles.menuItem}>
                  <Link to="/Meals13" className={styles.menuLink}>
                    Greek Meals
                  </Link>
                </li>{" "}
                <hr />
              </ul>
            </div>
          </div>
        </div>

        {/* top pagination */}
        <nav aria-label="Page navigation ">
          <ul className={styles.pagination}>
            <li
              className={`${styles.pageItem} ${
                currentPage === 1 ? styles.pageItemDisabled : ""
              }`}
            >
              <button
                className={styles.pageLink}
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                &laquo;
              </button>
            </li>
            {[...Array(totalPages)].map((_, pageNumber) => (
              <li
                key={pageNumber + 1}
                className={`${styles.pageItem} ${
                  currentPage === pageNumber + 1 ? styles.pageItemActive : ""
                }`}
              >
                <button
                  className={styles.pageLink}
                  onClick={() => goToPage(pageNumber + 1)}
                >
                  {pageNumber + 1}
                </button>
              </li>
            ))}
            <li
              className={`${styles.pageItem} ${
                currentPage === totalPages ? styles.pageItemDisabled : ""
              }`}
            >
              <button
                className={styles.pageLink}
                onClick={nextPage}
                disabled={currentPage === totalPages}
              >
                &raquo;
              </button>
            </li>
          </ul>
        </nav>

        {/* logo */}
        <div
          className={`d-flex justify-content-end align-items-center ${styles.logoContainer}`}
        >
          <img
            src="./Images/MainLogo/MainLogo.png"
            alt="logo"
            className={`${styles.logoImage} ${styles.combinedAnimation} me-5`} // Apply combined animation
            style={{ height: "50px" }}
          />
        </div>

        <div className=" my-3 mt-5">
          <div className="row mb-3"></div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
            {currentProducts.map((product, index) => (
              <div
                key={`${index}-${product.recipe_id}`}
                className={`col mb-3 }`}
              >
                <div
                  className={`card h-100  ${styles.box} ${
                    styles.logosContainer
                  } ${isDarkMode ? styles.darkMode : ""} `}
                >
                  <img
                    src={product.image_url}
                    className={` ${styles.cardimgtop} img-fluid `}
                    alt={product.title}
                    style={{
                      width: "400px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className={`card-body ${
                      styles.cardbody
                    } d-flex flex-column justify-content-center  ${
                      styles.logosContainer
                    } ${isDarkMode ? styles.darkMode : ""} `}
                  >
                    <h5
                      className={`card-title   ${styles.cardtitle}  `}
                      style={{ fontSize: "1.5rem", textAlign: "center" }}
                    >
                      {product.title}
                    </h5>
                    <p
                      className={`  ${styles.cardtext} card-text text-center fw-semibold  `}
                    >
                      Rank : {product.social_rank}
                    </p>
                    <a
                      className={`  ${styles.btnsecondary11} p-1 text-light bg17 mt-3 mx-auto `}
                      href={product.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                    <Link
                      to={`/MealsDetails/${product.recipe_id}`}
                      className={`  ${styles.btnsecondary} btn btn-secondary bg17 mt-3 `}
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* bottom pagination */}
          <nav aria-label="Page navigation">
            <ul className={styles.pagination}>
              <li
                className={`${styles.pageItem} ${
                  currentPage === 1 ? styles.pageItemDisabled : ""
                }`}
              >
                <button
                  className={styles.pageLink}
                  onClick={prevPage}
                  disabled={currentPage === 1}
                >
                  &laquo;
                </button>
              </li>
              {[...Array(totalPages)].map((_, pageNumber) => (
                <li
                  key={pageNumber + 1}
                  className={`${styles.pageItem} ${
                    currentPage === pageNumber + 1 ? styles.pageItemActive : ""
                  }`}
                >
                  <button
                    className={styles.pageLink}
                    onClick={() => goToPage(pageNumber + 1)}
                  >
                    {pageNumber + 1}
                  </button>
                </li>
              ))}
              <li
                className={`${styles.pageItem} ${
                  currentPage === totalPages ? styles.pageItemDisabled : ""
                }`}
              >
                <button
                  className={styles.pageLink}
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                >
                  &raquo;
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div data-theme={isDarkMode ? "dark" : "light"}>
        <Toggle isChecked={isDarkMode} handleChange={toggleDarkMode} />
      </div>
    </>
  );
}
export default Meals8;
