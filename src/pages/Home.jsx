import Best_seleri from "../componnint/Best_seleri";
import Futchered_pro from "../componnint/Futchred_pro";
import HeaderOne from "../componnint/HeaderOne";
import Product from "../componnint/Products";
import Slider from "../componnint/Slider";

export default function Home(){
    return(
        <div >
            <HeaderOne/>
            <Slider/>
            <Product/>
            <Best_seleri/>
            <Futchered_pro/>
        </div>
    )
}