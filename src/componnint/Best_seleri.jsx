import { allPro } from "./seleriPro"

export default function Best_seleri() {
  const allpro = allPro();
  return (
    <div className="h-[70vh] w-full flex gap-5">
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
                     <div className="flex flex-col absolute -top-28 opacity-0  group-hover:opacity-100 group-hover:top-1.5  transition-all duration-800  left-6 bg-pink-400 text-white  gap-2">
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
  );
}
