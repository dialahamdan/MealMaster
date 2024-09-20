// public
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContextProvider from "./context/User";
import ProtectedRoutes from "./auth/ProtectedRoutes";
import Root from "./Routes/Root";
import Loader from "./Pages/Loader/components/Loader";
import NotFound from "./Pages/NotFound/components/NotFound";

 // Home
import Home from "./Pages/Home/components/Home";
import HomeCardParagraph from "./Pages/Home/HomeCardParagraph/HomeCardParagraph";
import HomeLogoBrands from "./Pages/Home/HomeLogoBrands/HomeLogoBrands";
import HomeSocialLinks from "./Pages/Home/HomeSocialLinks/HomeSocialLinks";
import HomeSwiper from "./Pages/Home/HomeSwiper/HomeSwiper";
import HomePhto from "./Pages/Home/HomePhto/HomePhto";
import HomeNewsTicker from "./Pages/Home/HomeNewsTicker/HomeNewsTicker";
import HomeRecipeLive from "./Pages/Home/HomeRecipeLive/HomeRecipeLive";
import HomeVideo from "./Pages/Home/HomeVideo/HomeVideo";
import HomeIcons from "./Pages/Home/HomeIcons/HomeIcons";
// Auth
import Signup from "./Pages/Signup/components/Signup";
import Login from "./Pages/Login/components/Login";
import Sendcode from "./Pages/ForgetPass/Sendcode";
import ForgetPassword from "./Pages/ForgetPass/ForgetPassword";
// videos
import Video1 from "./Pages/Videos/components/Video1";
import Video2 from "./Pages/Videos/components/Video2";
import Video3 from "./Pages/Videos/components/Video3";
import Video4 from "./Pages/Videos/components/Video4";
import Video5 from "./Pages/Videos/components/Video5";
import Video6 from "./Pages/Videos/components/Video6";
// Categories
import MainCategories from "./Pages/MainCategories/MainCategories";
import Beef from "./Pages/SubCategories/Beef/Beef";
import Chicken from "./Pages/SubCategories/Chicken/Chicken";
import SeaFood from "./Pages/SubCategories/SeaFood/SeaFood";
import Vegetables from "./Pages/SubCategories/Vegetables/Vegetables";
import Pasta from "./Pages/SubCategories/Pasta/Pasta";
import FastFood from "./Pages/SubCategories/FastFood/FastFood";
import Appetizers from "./Pages/SubCategories/Appetizers/Appetizers";
import Seasonings from "./Pages/SubCategories/Seasonings/Seasonings";
import Frutis from "./Pages/SubCategories/Frutis/Frutis";
import Desserts from "./Pages/SubCategories/Desserts/Desserts";
//  Categories Details
import Dishes from "./Pages/Dishes/Dishes";
import DishesDetails from "./Pages/DishesDetails/DishesDetails";
// Meals sidebar pagenation
import Meals from "./Pages/Meals/components/Meals";
import Meals2 from "./Pages/Meals/components/Meals2";
import Meals3 from "./Pages/Meals/components/Meals3";
import Meals4 from "./Pages/Meals/components/Meals4";
import Meals5 from "./Pages/Meals/components/Meals5";
import Meals6 from "./Pages/Meals/components/Meals6";
import Meals7 from "./Pages/Meals/components/Meals7";
import Meals8 from "./Pages/Meals/components/Meals8";
import Meals9 from "./Pages/Meals/components/Meals9";
import Meals10 from "./Pages/Meals/components/Meals10";
import Meals11 from "./Pages/Meals/components/Meals11";
import Meals12 from "./Pages/Meals/components/Meals12";
import Meals13 from "./Pages/Meals/components/Meals13";
import MealsDetails from "./Pages/MealsDetails/components/MealsDetails";

// About us 
import Aboutus from "./Pages/Aboutus/Aboutus";
import Profile from "./Pages/Profile/Profile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/HomeSocialLinks", element: <HomeSocialLinks /> },
      { path: "/HomeCardParagraph", element: <HomeCardParagraph/> },
      { path: "/HomeLogoBrands", element: <HomeLogoBrands /> },
      { path: "/HomeSwiper", element: <HomeSwiper /> },
      { path: "/HomePhto", element: <HomePhto /> },
      { path: "/HomeNewsTicker", element: <HomeNewsTicker /> },
      { path: "/HomeRecipeLive", element: <HomeRecipeLive /> },
      { path: "/HomeVideo", element: <HomeVideo /> },
      { path: "/HomeIcons", element: <HomeIcons /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Signup /> },
      { path: "/sendcode", element: <Sendcode /> },
      { path: "/ForgetPassword", element: <ForgetPassword /> },
      { path: "/Video1", element: <Video1 /> },
      { path: "/Video2", element: <Video2 /> },
      { path: "/Video3", element: <Video3 /> },
      { path: "/Video4", element: <Video4 /> },
      { path: "/Video5", element: <Video5 /> },
      { path: "/Video6", element: <Video6 /> },
      { path: "/MainCategories", element: <MainCategories /> },
      { path: "/Aboutus", element: <Aboutus/> },
      { path: "/Profile", element: <Profile/> },
      {
        path: "/Beef",
        element: (
          <ProtectedRoutes>
            {" "}
            <Beef />{" "}
          </ProtectedRoutes>
        ),
      },
      {
        path: "/Chicken",
        element: (
          <ProtectedRoutes>
            {" "}
            <Chicken />{" "}
          </ProtectedRoutes>
        ),
      },
      {
        path: "/SeaFood",
        element: (
          <ProtectedRoutes>
            {" "}
            <SeaFood />{" "}
          </ProtectedRoutes>
        ),
      },
      {
        path: "/Vegetables",
        element: (
          <ProtectedRoutes>
            <Vegetables />{" "}
          </ProtectedRoutes>
        ),
      },
      {
        path: "/Pasta",
        element: (
          <ProtectedRoutes>
            {" "}
            <Pasta />{" "}
          </ProtectedRoutes>
        ),
      },
      {
        path: "/FastFood",
        element: (
          <ProtectedRoutes>
            {" "}
            <FastFood />{" "}
          </ProtectedRoutes>
        ),
      },
      {
        path: "/Appetizers",
        element: (
          <ProtectedRoutes>
            {" "}
            <Appetizers />{" "}
          </ProtectedRoutes>
        ),
      },
      {
        path: "/Seasonings",
        element: (
          <ProtectedRoutes>
            <Seasonings />{" "}
          </ProtectedRoutes>
        ),
      },
      {
        path: "/Frutis",
        element: (
          <ProtectedRoutes>
            {" "}
            <Frutis />{" "}
          </ProtectedRoutes>
        ),
      },
      {
        path: "/Desserts",
        element: (
          <ProtectedRoutes>
            <Desserts />{" "}
          </ProtectedRoutes>
        ),
      },
      { path: "/Dishes", element: <Dishes /> },
      { path: "/DishesDetails/:id", element: <DishesDetails /> },
      {
        path: "/Meals",
        element: (
          <ProtectedRoutes>
            {" "}
            <Meals />{" "}
          </ProtectedRoutes>
        ),
      },
      { path: "/Meals2", element: <Meals2 /> },
      { path: "/Meals3", element: <Meals3 /> },
      { path: "/Meals4", element: <Meals4 /> },
      { path: "/Meals5", element: <Meals5 /> },
      { path: "/Meals6", element: <Meals6 /> },
      { path: "/Meals7", element: <Meals7 /> },
      { path: "/Meals8", element: <Meals8 /> },
      { path: "/Meals9", element: <Meals9 /> },
      { path: "/Meals10", element: <Meals10 /> },
      { path: "/Meals11", element: <Meals11 /> },
      { path: "/Meals12", element: <Meals12 /> },
      { path: "/Meals13", element: <Meals13 /> },
      { path: "/MealsDetails/:recipeId", element: <MealsDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <UserContextProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </UserContextProvider>
      )}
    </>
  );
}

export default App;
