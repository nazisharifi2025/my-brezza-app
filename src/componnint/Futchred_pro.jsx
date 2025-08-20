import { allPro } from "./Futchred";

export default function Futchered_pro() {
  const allpro = allPro();
  return (
    <div className="w-[90%] h-fit py-6 flex items-center mx-auto px-5">
    <div className="h-[70vh] w-[80%] flex gap-5 border border-r-0  border-gray-300">
        {/* loop start */}
      {allpro.map(product => (
        <div key={product.id} className="flex group gap-2 relative justify-center flex-col items-center">
             <div className=" overflow-hidden">
          <img src={product.imgUrl} alt={product.name} />
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
          <h1 >{product.price}</h1>
          <button className="py-1 px-4 border group-hover:bg-emerald-600 border-gray-400 hover:bg-gray-400">{product.butten}</button>
                     <div className="flex flex-col absolute -top-28 opacity-0  group-hover:opacity-100 group-hover:top-8  transition-all duration-800  left-6 bg-pink-400 text-white  gap-2">
                <button className="p-2 w-full border-b border-gray-300 hover:bg-emerald-600">
                <span class="material-symbols-outlined ">
search_check_2
</span>
</button>
<button className="px-2 py-1 w-full border-b border-gray-300 hover:bg-emerald-600">
<span class="material-symbols-outlined ">
favorite
</span>
</button>
<button className="py-1 px-2 w-full hover:bg-emerald-600">
<span class="material-symbols-outlined">
star
</span>
</button>
            </div>
        </div>
      ))}
    </div>
    {/* loop endded */}
    {/* Featured Products */}
    <div className="w-[25%] h-[70vh] bg-[url(img/Vegetable-planting3.jpg)]">
    <div className="w-full h-full bg-[rgba(0,0,0,0.5)] p-5">
        <h1 className=" text-3xl w-full p-4 border-b border-gray-300 text-white">Featured Products</h1>
        <p className=" text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quas in, id possimus doloribus eaque facere aspernatur ipsa omnis? Tempora laboriosam quis dolore enim nulla! </p>
        <button className="py-1 px-3 text-gray-500 my-8 bg-white rounded-sm">VIEW ALL</button>
        <div className="flex text-white items-center">
            <span class="material-symbols-outlined">
arrow_back_ios
</span>
            <span class="material-symbols-outlined">
arrow_forward_ios
</span>

        </div>
    </div>
    </div>
    {/* Featured Products */}
    </div>
  );
}
