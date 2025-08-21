
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { allPro } from "./seleriPro";
export default function Best_seleri() {
  const allpro = allPro();
   return (
    <div className="w-full h-[65vh] my-6 px-6">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
        loop={true}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
      >
        {allpro.map(product => (
          <SwiperSlide key={product.id}>
            <div className="flex group h-full w-[230px] gap-2 relative justify-center flex-col items-center">
              <div className="overflow-hidden w-full">
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
                <button className="px-3 py-1 w-full border-b border-gray-300 hover:bg-emerald-600">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
                <button className="py-1 px-3 w-full hover:bg-emerald-600">
                  <span className="material-symbols-outlined">star</span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
