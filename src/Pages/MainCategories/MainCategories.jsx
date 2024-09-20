/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./MainCaterories.module.css";
import "../../App.css";
import useLocalStorage from "use-local-storage";
import { Toggle } from "../../assets/Toggle/Components/Toggle";

function MainCategories() {
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

  return (
    <>
      <div className={`${style.mainCategories}  `}>
        <h1 className={style.MainCategoriesTitle}>MainCategories</h1>
        <div
          className={`${style.mainDiv} ${style.bgodd} ${
            style.logosContainer1
          } ${isDarkMode ? style.darkMode : ""}`}
        >
          <div className={style.MainImgWrapper}>
            <Link to="/Beef">
              <img
                className={style.MainImg}
                src="Images/mainCategories/categoryBeef.jpg"
              />
            </Link>
          </div>
          <div className={style.mainInfo}>
            <h3>Beef</h3>
            <p>
              Beef is a versatile and rich source of protein, enjoyed in a
              variety of cuisines around the world. From succulent steaks and
              hearty burgers to slow-cooked stews and savory roasts, beef offers
              a deep, satisfying flavor. It's packed with essential nutrients
              like iron and B vitamins, making it a staple in many diets.
              Whether grilled, braised, or sautéed, beef can be adapted to suit
              a wide range of dishes and tastes
            </p>
            <Link to="/Beef" className={style.MainLink}>
              see more
            </Link>
          </div>
        </div>

        <div
          className={`${style.mainDiv} ${style.bgeven} ${
            style.logosContainer2
          } ${isDarkMode ? style.darkMode : ""}`}
        >
          <div className={style.MainImgWrapper}>
            <Link to="/Chicken">
              <img
                className={style.MainImg}
                src="Images/mainCategories/categoryChicken.jpg"
              />
            </Link>
          </div>
          <div className={style.mainInfo}>
            <h3>Chicken</h3>
            <p>
              Chicken is a lean, protein-rich meat that is incredibly popular
              for its mild flavor and versatility in the kitchen. It can be
              grilled, roasted, fried, or simmered in soups and stews, making it
              a key ingredient in cuisines across the globe. Chicken is also a
              great source of essential nutrients like niacin and selenium.
              Whether you prefer it spicy, savory, or sweet, chicken can be
              adapted to any flavor profile.
            </p>
            <Link to="/Chicken" className={style.MainLink}>
              see more
            </Link>
          </div>
        </div>

        <div
          className={`${style.mainDiv} ${style.bgodd} ${
            style.logosContainer1
          } ${isDarkMode ? style.darkMode : ""} `}
        >
          <div className={style.MainImgWrapper}>
            <Link to="/SeaFood">
              <img
                className={style.MainImg}
                src="Images/mainCategories/categorySeaFood.jpg"
              />
            </Link>
          </div>
          <div className={style.mainInfo}>
            <h3>SeaFood</h3>
            <p>
              Seafood encompasses a wide range of marine life, including fish,
              shellfish, and crustaceans, each offering unique flavors and
              textures. Rich in omega-3 fatty acids, vitamins, and minerals,
              seafood is not only delicious but also packed with health
              benefits. From delicate sushi to hearty chowders and grilled
              fillets, seafood is a culinary delight that can be enjoyed in
              various forms and preparations.
            </p>
            <Link to="/SeaFood" className={style.MainLink}>
              see more
            </Link>
          </div>
        </div>

        <div
          className={`${style.mainDiv} ${style.bgeven} ${
            style.logosContainer2
          } ${isDarkMode ? style.darkMode : ""}`}
        >
          <div className={style.MainImgWrapper}>
            <Link to="/Vegetables">
              <img
                className={style.MainImg}
                src="Images/mainCategories/categoryVege.png"
              />
            </Link>
          </div>
          <div className={style.mainInfo}>
            <h3>Vegetables</h3>
            <p>
              Vegetables are essential to a balanced diet, offering a rich
              source of vitamins, minerals, and fiber. They come in a variety of
              colors, flavors, and textures, each bringing its own nutritional
              benefits. Whether eaten raw, steamed, roasted, or stir-fried,
              vegetables can be a delicious and versatile part of any meal.
              Incorporating a wide range of vegetables into your diet supports
              overall health and well-being.
            </p>
            <Link to="/Vegetables" className={style.MainLink}>
              see more
            </Link>
          </div>
        </div>

        <div
          className={`${style.mainDiv} ${style.bgodd} ${
            style.logosContainer1
          } ${isDarkMode ? style.darkMode : ""}`}
        >
          <div className={style.MainImgWrapper}>
            <Link to="/Pasta">
              <img
                className={style.MainImg}
                src="Images/mainCategories/categoryPasta.jpg"
              />
            </Link>
          </div>
          <div className={style.mainInfo}>
            <h3>Pasta</h3>
            <p>
              Pasta is a beloved staple of Italian cuisine, known for its
              comforting texture and ability to absorb rich sauces. Whether in
              the form of spaghetti, penne, or lasagna, pasta dishes can range
              from simple, quick meals to elaborate, layered creations. Paired
              with a variety of sauces, meats, and vegetables, pasta is a
              versatile dish that can be adapted to suit any taste, making it a
              favorite comfort food worldwide.
            </p>
            <Link to="/Pasta" className={style.MainLink}>
              see more
            </Link>
          </div>
        </div>

        <div
          className={`${style.mainDiv} ${style.bgeven} ${
            style.logosContainer2
          } ${isDarkMode ? style.darkMode : ""}`}
        >
          <div className={style.MainImgWrapper}>
            <Link to="/FastFood">
              <img
                className={style.MainImg}
                src="Images/mainCategories/categoryFastFood.jpg"
              />
            </Link>
          </div>
          <div className={style.mainInfo}>
            <h3>Fast Food</h3>
            <p>
              Fast food is a popular choice for quick, convenient meals,
              offering a wide range of options from burgers and fries to tacos
              and fried chicken. Known for its speed and accessibility, fast
              food is a staple in modern, busy lifestyles. While often enjoyed
              for its taste and affordability, it is important to balance fast
              food with healthier choices due to its typically high levels of
              fat, sugar, and salt.
            </p>
            <Link to="/FastFood" className={style.MainLink}>
              see more
            </Link>
          </div>
        </div>

        <div
          className={`${style.mainDiv} ${style.bgodd} ${
            style.logosContainer1
          } ${isDarkMode ? style.darkMode : ""}`}
        >
          <div className={style.MainImgWrapper}>
            <Link to="/Appetizers">
              <img
                className={style.MainImg}
                src="Images/mainCategories/categoryAppetizers.jpg"
              />
            </Link>
          </div>
          <div className={style.mainInfo}>
            <h3>Appetizers</h3>
            <p>
              Appetizers are small, flavorful dishes served before the main
              course to stimulate the appetite. They range from light bites like
              bruschetta and dips to more elaborate offerings like stuffed
              mushrooms or mini quiches, setting the stage for the meal ahead.
            </p>
            <Link to="/Appetizers" className={style.MainLink}>
              see more
            </Link>
          </div>
        </div>

        <div
          className={`${style.mainDiv} ${style.bgeven} ${
            style.logosContainer2
          } ${isDarkMode ? style.darkMode : ""}`}
        >
          <div className={style.MainImgWrapper}>
            <Link to="/Seasonings">
              <img
                className={style.MainImg}
                src="Images/mainCategories/categorySeasonings.png"
              />
            </Link>
          </div>
          <div className={style.mainInfo}>
            <h3>Seasonings</h3>
            <p>
              Seasonings are ingredients like herbs, spices, and salts that
              enhance the flavor of food. They add depth and complexity to
              dishes, transforming basic ingredients into delicious meals with
              just a pinch or sprinkle.
            </p>
            <Link to="/Seasonings" className={style.MainLink}>
              see more
            </Link>
          </div>
        </div>

        <div
          className={`${style.mainDiv} ${style.bgodd} ${
            style.logosContainer1
          } ${isDarkMode ? style.darkMode : ""}`}
        >
          <div className={style.MainImgWrapper}>
            <Link to="/Frutis">
              <img
                className={style.MainImg}
                src="Images/mainCategories/categoryFruites.jpg"
              />
            </Link>
          </div>
          <div className={style.mainInfo}>
            <h3>Fruits</h3>
            <p>
              Fruits are nature’s sweet treats, packed with essential vitamins,
              antioxidants, and fiber. From juicy berries and crisp apples to
              tropical mangoes and bananas, fruits offer a refreshing burst of
              flavor and nutrition. They can be enjoyed fresh, dried, or in
              juices and smoothies, making them a versatile addition to any
              diet. Regular consumption of fruits is associated with numerous
              health benefits, including improved digestion and immune function.
            </p>
            <Link to="/Frutis" className={style.MainLink}>
              see more
            </Link>
          </div>
        </div>

        <div
          className={`${style.mainDiv} ${style.bgeven} ${
            style.logosContainer2
          } ${isDarkMode ? style.darkMode : ""}`}
        >
          <div className={style.MainImgWrapper}>
            <Link to="/Desserts">
              <img
                className={style.MainImg}
                src="Images/mainCategories/categoryDessert.jpg"
              />
            </Link>
          </div>
          <div className={style.mainInfo}>
            <h3>Desserts</h3>
            <p>
              Desserts are the sweet finale to a meal, offering indulgent
              flavors and a touch of luxury. From rich chocolate cakes and
              creamy ice creams to fruity pies and delicate pastries, desserts
              come in countless varieties to satisfy any sweet tooth. While
              often enjoyed as a special treat, desserts can also be made with
              healthier ingredients like fruits, nuts, and whole grains, making
              them a delightful part of a balanced diet.
            </p>
            <Link to="/Desserts" className={style.MainLink}>
              see more
            </Link>
          </div>
        </div>
      </div>
      <div data-theme={isDarkMode ? "dark" : "light"}>
        <Toggle isChecked={isDarkMode} handleChange={toggleDarkMode} />
      </div>
    </>
  );
}

export default MainCategories;
