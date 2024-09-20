import { useEffect } from "react";
import "./HomeIcons.css"; // Import your CSS file
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import useLocalStorage from "use-local-storage";
import { Toggle } from "../../../assets/Toggle/Components/Toggle";

function HomeIcons() {
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
      <div
        className={`TotalSwiper logosContainer ${isDarkMode ? "darkMode" : ""}`}
      >
        <h1 className="SwiperTitle">Trending </h1>
        <div className="swiper-container">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={1} // Smaller space between images inside Swiper
            slidesPerView={5} // Number of slides visible
            navigation={true} // Enable navigation arrows
            loop={true} // Enable continuous looping
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 1 }, // Small screens
              480: { slidesPerView: 3, spaceBetween: 1 }, // Medium screens
              768: { slidesPerView: 3, spaceBetween: 1 }, // Larger screens
              1024: { slidesPerView: 3, spaceBetween: 1 }, // Extra large screens
              1400: { slidesPerView: 5, spaceBetween: 1 }, // Extra large screens
            }}
          >
            <SwiperSlide>
              <div className="iconHome">
                <img src="Images/HomeIcons/icon1.jpg" alt="Icon 1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="iconHome">
                <img src="Images/HomeIcons/icon2.jpeg" alt="Icon 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="iconHome">
                <img src="Images/HomeIcons/icon3.jpg" alt="Icon 3" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="iconHome">
                <img src="Images/HomeIcons/icon4.jpg" alt="Icon 4" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="iconHome">
                <img src="Images/HomeIcons/icon5.jpg" alt="Icon 5" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="iconHome">
                <img src="Images/HomeIcons/icon6.webp" alt="Icon 6" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="iconHome">
                <img src="Images/HomeIcons/icon7.webp" alt="Icon 7" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="iconHome">
                <img src="Images/HomeIcons/icon8.webp" alt="Icon 8" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="iconHome">
                <img src="Images/HomeIcons/icon9.jpg" alt="Icon 9" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="iconHome">
                <img src="Images/HomeIcons/icon10.webp" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="iconHome">
                <img src="Images/HomeIcons/icon11.webp" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="iconHome">
                <img src="Images/HomeIcons/icon12.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="iconHome">
                <img src="Images/HomeIcons/icon13.webp" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="iconHome">
                <img src="Images/HomeIcons/icon14.jpg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="iconHome">
                <img src="Images/HomeIcons/icon15.webp" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="iconHome">
                <img src="Images/HomeIcons/icon16.webp" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="iconHome">
                <img src="Images/HomeIcons/icon17.webp" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="iconHome">
                <img src="Images/HomeIcons/icon18.jpg" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div data-theme={isDarkMode ? "dark" : "light"}>
        <Toggle isChecked={isDarkMode} handleChange={toggleDarkMode} />
      </div>
    </>
  );
}

export default HomeIcons;
