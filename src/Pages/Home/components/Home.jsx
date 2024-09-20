import "../../../App.css";
import HomeSwiper from "../HomeSwiper/HomeSwiper";
import HomeLogoBrands from "../HomeLogoBrands/HomeLogoBrands";
import HomeCardParagraph from "../HomeCardParagraph/HomeCardParagraph";
import HomeIcons from "../HomeIcons/HomeIcons";
import MainCategories from "../../MainCategories/MainCategories";
import HomeSocialLinks from "../HomeSocialLinks/HomeSocialLinks";
import HomeRecipeLive from "../HomeRecipeLive/HomeRecipeLive";
import HomeNewsTicker from "../HomeNewsTicker/HomeNewsTicker";
import HomePhto from "../HomePhto/HomePhto";
import HomeVideo from "../HomeVideo/HomeVideo";

function Home() {
  return (
    <>
      <div>
        <HomeSwiper />
        <HomeLogoBrands />
        <HomeCardParagraph />
        <HomeIcons />
        <MainCategories />
        <HomeSocialLinks />
        <HomeRecipeLive />
        <HomeNewsTicker />
        <HomePhto />
        <HomeVideo />
      </div>
    </>
  );
}

export default Home;
