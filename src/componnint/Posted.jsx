import { PostPro } from "./PostPro";
export default function Posted(){
    const post = PostPro();
    return(
        <div className="flex w-[90%] mx-auto my-6 h-[80vh] gap-3">
        {post.map(posts=>{
            return(
            <div className="w-[50%] h-full relative group">
                <img src={posts.imgUrl} alt="" />
                <div className="text-gray-400 flex gap-4">
                    <div className="flex items-center">
                        <span class="material-symbols-outlined">
person
</span>
                        <span className="text-sm">Posted By MagikThemes</span>
                    </div>
                    <div className="flex items-center">
                        <span class="material-symbols-outlined">
tooltip
</span>
                        <span className="text-sm">5 Comments </span>
                    </div>
                    <div className="flex items-center">
                        <span class="material-symbols-outlined">
calendar_month
</span>
                        <span className="text-sm">January 04, 2016</span>
                    </div>
                    {/* div hover */}
                    <div className="h-[289px] w-[600px] opacity-0 transition-all duration-800 group-hover:opacity-100 bg-[rgba(0,0,0,0.5)] absolute top-0 flex items-center justify-center">
                        <span class="material-symbols-outlined p-3 bg-green-400 text-white">
search
</span>
                    </div>
                </div>
                <h1 className="my-4 text-2xl">{posts.titel}</h1>
                <p className="text-gray-400 mb-3">{posts.discription }</p>
                <button className="py-1 hover:bg-emerald-400 hover:border-emerald-400 px-3 border border-gray-400 rounded-sm my-5 ">{posts.button}</button>
            </div>
            )
            })}
        </div>
    )
}