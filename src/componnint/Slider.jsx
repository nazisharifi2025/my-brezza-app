import { useState, useEffect } from "react";
import Slider1 from "../img/khavas-angoor.jpg";
import Slider2 from "..//img/سبزی.jpg";
import banner1 from "../img/mid-banner1.jpg";
import banner2 from "../img/mid-banner2.jpg";
import banner3 from "../img/rhs-banner.jpg";
export default function Slider(){
    
     const slides = [
        {
            image: Slider1,
            title: "GO LIGHTY",
            subtitle: "MODERN DESIGN",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            image: Slider2,
            title: "FRESH STYLE",
            subtitle: "NATURAL TOUCH",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    // auto slide every 5s
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return(
        <div className="h-fit mt-12 w-[93%] mx-auto flex items-center">
            {/* slider start */}
              <div className="relative h-[74vh] w-[45%] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`
                        absolute top-0 left-0 h-full w-full transition-opacity duration-700 ease-in-out
                        ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}
                    `}
                >
                    {/* تصویر پس‌زمینه */}
                    <img src={slide.image} alt={`slide-${index}`} className="h-full w-full object-cover" />
                    
                    {/* لایه شفاف روی تصویر */}
                    <div className="flex flex-col justify-center gap-4 absolute w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.5)] text-white p-10">
                        <h1 className="w-[60%] border border-l-0 border-r-0 border-white p-4 uppercase">{slide.subtitle}</h1>
                        <h1 className="font-bold text-4xl">{slide.title}</h1>
                        <p>{slide.description}</p>
                        <button className="font-bold text-sm p-3 px-4 border border-gray-400 w-fit">SHOP NOW</button>
                    </div>
                </div>
            ))}

            {/* نقاط کنترل پایین */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-gray-400"}`}
                    ></button>
                ))}
            </div>
        </div>
            {/* slider endded */}
            {/* banner start */}
            <div className="w-[30%] justify-center items-center flex flex-col h-fit p-4 gap-5">
                <img src={banner1} className="w-[83%]" alt="" />
                <img src={banner2} className="w-[83%]" alt="" />
            </div>
            {/* Banner endded */}
            {/* banner2 start */}
            <div className="w-[30%] h-[74vh]">
            <img src={banner3} className="h-full w-full" alt="" />
            </div>
            {/* banner2 endded */}
        </div>
    )
}