import { useRef } from "react";
import { allPro } from "./Futchred";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Futchered_pro() {
  const allpro = allPro();
  const swiperRef = useRef(null);

  const goPrev = () => swiperRef.current?.slidePrev();
  const goNext = () => swiperRef.current?.slideNext();

  return (
    <div className="lg:w-[90%] md:w-[90%] w-full h-fit py-6 flex lg:flex-row md:flex-row flex-col gap-5 mx-auto px-5">
      {/* ✅ Swiper Section */}
      <div className="lg:w-[75%] md:w-[65%]">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          slidesPerGroup={4}
          loop={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            320: { slidesPerView: 1, slidesPerGroup: 1 },
            640: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 4, slidesPerGroup: 4 },
          }}
        >
          {allpro.map((product) => (
            <SwiperSlide key={product.id}>
              {/* 🟩 کارت محصول */}
              <div className="flex group gap-2 relative justify-center flex-col items-center">
                <div className="overflow-hidden">
                  <img
                    src={product.imgUrl}
                    alt={product.name}
                    className="h-full w-full transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                </div>

                <h1 className="group-hover:text-emerald-600">{product.name}</h1>

                <div className="flex items-center justify-center text-gray-400">
                  <span className="material-symbols-outlined text-amber-400">star</span>
                  <span className="material-symbols-outlined text-amber-400">star</span>
                  <span className="material-symbols-outlined text-amber-400">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                </div>

                <h1>{product.price}</h1>

                <button className="py-1 px-4 border group-hover:bg-emerald-600 border-gray-400 hover:bg-gray-400">
                  {product.butten}
                </button>

                <div className="flex flex-col absolute -top-28 opacity-0 group-hover:opacity-100 group-hover:top-0 transition-all duration-800 left-6 bg-pink-400 text-white gap-2">
                  <button className="p-2 w-full border-b border-gray-300 hover:bg-emerald-600">
                    <span className="material-symbols-outlined">search_check_2</span>
                  </button>
                  <button className="px-2 py-1 w-full border-b border-gray-300 hover:bg-emerald-600">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                  <button className="py-1 px-2 w-full hover:bg-emerald-600">
                    <span className="material-symbols-outlined">star</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ Featured Section with navigation buttons */}
      <div className="lg:w-[25%] md:w-[35%] lg:h-[70vh] md:h-[45vh] bg-[url(img/Vegetable-planting3.jpg)] bg-cover bg-center">
        <div className="w-full h-full bg-[rgba(0,0,0,0.5)] p-5 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl w-full p-4 border-b border-gray-300 text-white">
              Featured Products
            </h1>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              quas in, id possimus doloribus eaque facere aspernatur ipsa omnis?
              Tempora laboriosam quis dolore enim nulla!
            </p>
            <button className="py-1 px-3 text-gray-500 my-8 bg-white rounded-sm">
              VIEW ALL
            </button>
          </div>

          {/* 🎯 فلش‌های کنترل Swiper */}
          <div className="flex text-white items-center gap-4 justify-center mt-auto">
            <button onClick={goPrev}>
              <span className="material-symbols-outlined text-2xl">
                arrow_back_ios
              </span>
            </button>
            <button onClick={goNext}>
              <span className="material-symbols-outlined text-2xl">
                arrow_forward_ios
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
