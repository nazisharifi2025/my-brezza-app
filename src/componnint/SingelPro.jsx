import product3 from "../img/product3-290x340.jpg"
export default function SingelPro(){
    return(
        <div className="lg:h-[73vh] md:h-[50vh] lg:w-[23%] md:w-[50%] md:mx-auto relative py-2 flex flex-col group justify-between items-center border border-gray-300">
            <div className="w-[95%] h-[320px] overflow-hidden">
            <img src={product3} className=" h-ful w-full transition-transform duration-300 ease-in-out transform hover:scale-140" alt="" />
            </div>
            <h1 className=" group-hover:text-emerald-600">Oringe</h1>
            <div className="flex items-center justify-center">
                <span class="material-symbols-outlined">
star
</span>
<span class="material-symbols-outlined">
star
</span>
<span class="material-symbols-outlined">
star
</span>
<span class="material-symbols-outlined">
star
</span>
<span class="material-symbols-outlined">
star
</span>
            </div>
            <strong>$14.00</strong>
            <button className="py-1 px-4 border group-hover:bg-emerald-600 border-gray-400 hover:bg-gray-400">ADD TO CART</button>
            <div className="flex flex-col gap-1 absolute top-8 left-4">
                <button className="py-1 px-3 bg-emerald-600 flex-col flex  text-white text-center ">
                    <span className="font-bold">00</span>
                    <span className="text-sm">DAYS</span>
                </button>
                <button className="py-1 px-3 bg-white border border-gray-300 text-black flex-col flex   text-center ">
                    <span className="font-bold">00</span>
                    <span className="text-sm">HRS</span>
                </button>
                <button className="py-1 px-3 bg-white border border-gray-300 text-black flex-col flex  text-center ">
                    <span className="font-bold">00</span>
                    <span className="text-sm">MINS</span>
                </button>
                <button className="py-1 px-3 bg-white border border-gray-300 text-black flex-col flex text-center ">
                    <span className="font-bold">00</span>
                    <span className="text-sm">SEC</span>
                </button>
            </div>
            <div className="flex flex-col absolute -top-34 opacity-0  group-hover:opacity-100 group-hover:top-2 transition-all duration-800  left-6 bg-pink-400 text-white  gap-2">
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
    )
}