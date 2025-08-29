import { useEffect, useState } from "react";
import logo from "../img/logo.png";
import { Navigate } from "react-router-dom";

export default function HeaderOne() {
    const [isOpen, setIsOpen] = useState(false)
    // ⬇️ state برای کنترل اسکرول
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // ⬇️ گوش دادن به اسکرول
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="lg:h-[150px] md:h-[160px] w-full bg-[url(img/bottom-banner1.jpg)] bg-cover text-gray-400">
            {/* One Bakhsh start */}
            <div className="bg-[rgba(0,0,0,0.6)] py-2 relative flex flex-col justify-between h-full w-full">
                
                {/* nav one start */}
                <nav className="flex lg:w-[90%] md:w-full mx-auto justify-between lg:p-4 p-2 h-6 items-center">
                    <div className="flex space-x-3 ">
                        <p className="flex justify-center items-center h-full">
                            English
                            <span className="material-symbols-outlined">
                                arrow_drop_down
                            </span>
                        </p>
                        <span>Default welcome msg !</span>
                    </div>

                    {/* nav links */}
                    <ul className="lg:flex md:flex hidden space-x-3 ">
                        <li className="hover:text-green-500 hover:cursor-pointer">My account</li>
                        <li className="hover:text-green-500 hover:cursor-pointer">Track Order</li>
                        <li className="hover:text-green-500 hover:cursor-pointer">Wishlist</li>
                        <li className="hover:text-green-500 hover:cursor-pointer">CheckOut</li>
                        <li className="hover:text-green-500 hover:cursor-pointer">Login</li>
                        <li className="hover:text-green-500 hover:cursor-pointer">Register</li>
                    </ul>
                </nav>
                {/* nav one endded */}

                {/* logo + input */}
                <div className="lg:w-[90%] md:w-full lg:mx-auto md:px-2  h-full mb-5 flex lg:flex-row md:flex-row flex-col justify-between items-center">
                    {/* لوگو */}
                    <img src={logo} alt="Logo" />

                    {/* جعبه‌های سرچ و آیکون‌ها */}
                    <div className="flex gap-7">

                        {/* سرچ */}
                        <div className=" lg:flex md:flex hidden items-center">
                            <input
                                type="search"
                                placeholder="Search for product"
                                className="bg-white py-2 lg:px-24 md-px-12 border-r border-gray-400 rounded-sm rounded-r-none"
                            />
                            <span className="material-symbols-outlined p-2 bg-white rounded-sm rounded-l-none">
                                search
                            </span>
                        </div>

                        {/* آیکون‌ها */}
                        <div className="flex gap-56 justify-between px-2 lg:px-0 md:px-0">
                            <button onClick={()=> setIsOpen(true)} className="p-3 bg-white rounded-sm lg:hidden md:hidden flex">
                            <span class="material-symbols-outlined ">
menu
</span>
</button>
                        <div className="flex items-center">
                            <button className="border border-gray-500 lg:p-1 md:p-1 p-3 rounded-sm rounded-r-none">
                                <span className="material-symbols-outlined hover:cursor-pointer hover:text-green-500">
                                    android_cell_5_bar
                                </span>
                            </button>
                            <button className="border border-l-0 border-gray-500 lg:p-1 md:p-1 p-3 rounded-sm rounded-l-none">
                                <span className="material-symbols-outlined hover:cursor-pointer hover:text-green-500">
                                    favorite
                                </span>
                            </button>
                        </div>
                        </div>
                        {/* سبد خرید */}
                        <div className=" lg:flex md:flex hidden items-center">
                            <button className="py-[5px] px-3 border-r border-gray-400 bg-white rounded-sm rounded-r-none">
                                <span className="material-symbols-outlined">
                                    shopping_cart
                                </span>
                            </button>
                            <button className="py-2 lg:px-12 md:px-6 border-r font-bold border-gray-400 bg-white rounded-sm rounded-l-none">
                                <span className="text-green-400">0</span> MY CART / $0.00
                            </button>
                        </div>
                    </div>
                </div>

                {/* ✅ navbar اصلی با تغییر در حالت اسکرول */}
                <div
                    className={`
                        lg:flex md:flex hidden space-x-5 px-5 p-3 h-fit text-white mx-auto transition-all duration-300 ease-in-out
                        ${isScrolled
                            ? "fixed top-0 left-0 w-full bg-emerald-500 z-50 shadow-md"
                            : "absolute custom-clip bg-emerald-400 lg:w-[90%] md:w-full -bottom-6 lg:left-12 md:left-0"}
                    `}
                >
                    {[
                        "Home",
                        "VEGETABLES",
                        "FRUITS",
                        "ORGANIC FRUITS",
                        "BLOG",
                        "PAGES",
                        "SHOP",
                    ].map((item, index) => (
                        <li
                            key={index}
                            className="h-[60%] px-2 border-r border-white hover:cursor-pointer font-medium list-none"
                        >
                            {item}
                        </li>
                    ))}
                </div>
                {/* navbar endded */}

            </div>
            {/* One bakhsh endded */}
            <div className={`w-[60%] h-screen bg-gray-400 flex flex-col overflow-y-scroll fixed  top-0 lg:hidden md:hidden  -left-[60%] transition-all duration-500 z-50
                ${isOpen  ? "left-0" : "-left-[60%]" }
                `}>
                     <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 rounded-sm bg-white p-2 text-center self-end m-2"
                >
                    <span className="material-symbols-outlined">
                                    close
                                </span>
                </button>
                  {/* سرچ */}
                        <div className="flex items-center py-12 border-b border-gray-300 mx-auto px-4 w-full">
                            <input
                                type="search"
                                placeholder="Search for product"
                                className="bg-white py-2 lg:px-24 md-px-12 pm-24 w-full border-r border-gray-400 rounded-sm rounded-r-none"
                            />
                            <span className="material-symbols-outlined p-2 bg-white rounded-sm rounded-l-none">
                                search
                            </span>
                        </div>
                            {/* nave  */}
                            <ul className="flex flex-col text-white">
                                <li className=" w-full border-b py-4 px-2 font-bold border-b-gray-200">Home</li>
                                <li className=" w-full border-b py-4 px-2 font-bold border-b-gray-200">VEGETABLES</li>
                                <li className=" w-full border-b py-4 px-2 font-bold border-b-gray-200">FRUITS</li>
                                <li className=" w-full border-b py-4 px-2 font-bold border-b-gray-200">ORGANIC FRUITS</li>
                                <li className=" w-full border-b py-4 px-2 font-bold border-b-gray-200">BLOG</li>
                                <li className=" w-full border-b py-4 px-2 font-bold border-b-gray-200">PAGES</li>
                                <li className=" w-full border-b py-4 px-2 font-bold border-b-gray-200">SHOP</li>
                            </ul>
                             <ul className="lg:flex md:flex  space-x-3 ">
                        <li className="hover:text-green-500 w-full border-b py-4 px-2 font-bold border-b-gray-200 text-gray-200 hover:cursor-pointer">My account</li>
                        <li className="hover:text-green-500 w-full border-b py-4 px-2 font-bold border-b-gray-200 text-gray-200 hover:cursor-pointer">Track Order</li>
                        <li className="hover:text-green-500 w-full border-b py-4 px-2 font-bold border-b-gray-200 text-gray-200 hover:cursor-pointer">Wishlist</li>
                        <li className="hover:text-green-500 w-full border-b py-4 px-2 font-bold border-b-gray-200 text-gray-200 hover:cursor-pointer">CheckOut</li>
                        <li className="hover:text-green-500 w-full border-b py-4 px-2 font-bold border-b-gray-200 text-gray-200 hover:cursor-pointer">Login</li>
                        <li className="hover:text-green-500 w-full border-b py-4 px-2 font-bold border-b-gray-200 text-gray-200 hover:cursor-pointer">Register</li>
                    </ul>
            </div>
        </div>
    );
}
