import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import logo1 from "../img/b-logo1.png";
import logo2 from "../img/b-logo2.png";
import logo3 from "../img/b-logo3.png";
import logo4 from "../img/b-logo4.png";
import logo5 from "../img/b-logo5.png";
import logo6 from "../img/b-logo6.png";

export default function Swiper() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <div className="w-full h-20 bg-gray-300 flex items-center px-4">
      <SwiperContainer
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="w-full"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img src={logo} alt={`logo-${index}`} className="h-12 object-contain" />
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </div>
  );
}
