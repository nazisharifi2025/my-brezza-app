import Banner from "../componnint/banner2";
import Best_seleri from "../componnint/Best_seleri";
import Footer from "../componnint/Footer";
import Futchered_pro from "../componnint/Futchred_pro";
import HeaderOne from "../componnint/HeaderOne";
import Posted from "../componnint/Posted";
import Product from "../componnint/Products";
import Slider from "../componnint/Slider";
import Swiper from "../componnint/Swiper";

export default function Home(){
    return(
        <div  className="w-full h-screen overflow-y-scroll">
            <HeaderOne/>
            <Slider/>
            <Product/>
            <Best_seleri/>
            <Futchered_pro/>
            <Banner/>
            <Posted/>
            <Swiper/>
            <Footer/>
        </div>
    )
}