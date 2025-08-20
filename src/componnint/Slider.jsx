import Slider1 from "../img/khavas-angoor.jpg";
import Slider2 from "..//img/سبزی.jpg";
import banner1 from "../img/mid-banner1.jpg";
import banner2 from "../img/mid-banner2.jpg";
import banner3 from "../img/rhs-banner.jpg";
export default function Slider(){
    return(
        <div className="h-fit mt-12 w-[93%] mx-auto flex items-center">
            {/* slider start */}
            <div className="h-[74vh] w-[45%]">
                <img src={Slider2} alt="" className="h-full w-full" />
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