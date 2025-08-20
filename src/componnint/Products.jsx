import { Link } from "lucide-react";
import SingelPro from "./SingelPro";
import { creatpro } from "./creatPro";
export default function Product(){
    const pruduct = creatpro()
    return(
        <div className="h-fit w-[95%] mx-auto p-2 flex gap-4">
            <SingelPro/>
            <div className="w-[75%]  flex flex-col h-[73vh]">
                {/* Abstraction start */}
                <div className=" flex w-full justify-between ">
                    <h1 className="text-2xl"><span className="text-emerald-600">NEW</span> PRODUCT</h1>
                    <div className=" flex font-light space-x-2 ">
                        <button className="py-1 px-4  bg-pink-200 rounded-sm">FROUTS VEGETABLES</button>
                        <button className="py-1 px-4  bg-gray-200 rounded-sm">FROUTS </button>
                        <button className="py-1 px-4  bg-gray-200 rounded-sm">ORGANIC VEGETABLES</button>
                    </div>
                    <div >
                    </div>
                </div>
                {/* Abstraction end */}
                {/* Product stat */}
                <div className="h-[69vh] w-full m-2 p-2 flex gap-3 ">
                    {pruduct.map(product=>(
                        <div className="flex group gap-2 relative justify-center flex-col items-center">
                            <div className=" overflow-hidden">
                        <img src={product.imgUrl} className=" h-ful w-full transition-transform duration-300 ease-in-out transform hover:scale-110" alt="" />
                        </div>
                        <h1 className="group-hover:text-emerald-600">{product.name}</h1>
                        <div className="flex items-center justify-center text-gray-400">
                <span class="material-symbols-outlined text-amber-400">
star
</span>
<span class="material-symbols-outlined text-amber-400">
star
</span>
<span class="material-symbols-outlined text-amber-400">
star
</span>
<span class="material-symbols-outlined ">
star
</span>
<span class="material-symbols-outlined">
star
</span>
            </div>
                        <h1>{product.price}</h1>
                        <button className="py-1 px-4 border group-hover:bg-emerald-600 border-gray-400 hover:bg-gray-400">{product.butten}</button>
                        <div className="flex flex-col absolute -top-28 opacity-0  group-hover:opacity-100 group-hover:top-1  transition-all duration-800  left-6 bg-pink-400 text-white  gap-2">
                <button className="p-2 w-full border-b border-gray-300 hover:bg-emerald-600">
                <span class="material-symbols-outlined ">
search_check_2
</span>
</button>
<button className="px-3 py-1 w-full border-b border-gray-300 hover:bg-emerald-600">
<span class="material-symbols-outlined ">
favorite
</span>
</button>
<button className="py-1 px-3 w-full hover:bg-emerald-600">
<span class="material-symbols-outlined">
star
</span>
</button>
            </div>
                        </div>
                        
                    ))}
                    
                </div>
                {/* Product endd */}
            </div>
        </div>
    )
}