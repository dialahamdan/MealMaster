import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "./HomeSwiper.module.css";
function HomeSwiper() {
  return (
    <>
      <div className={style.imageContainer}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          className={style.HomePage}
        >
          <SwiperSlide>
            <div
              className={style.cover}
              style={{ backgroundImage: "url('./Images/Home/H15.png')" }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={style.cover}
              style={{ backgroundImage: "url('./Images/Home/H31.jpg')" }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={style.cover}
              style={{ backgroundImage: "url('./Images/Home/H10.png')" }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={style.cover}
              style={{ backgroundImage: "url('./Images/Home/H3.jpg')" }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={style.cover}
              style={{ backgroundImage: "url('./Images/Home/H13.png')" }}
            ></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default HomeSwiper;
