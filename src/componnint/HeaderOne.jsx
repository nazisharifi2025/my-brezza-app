import { useEffect, useState } from "react";
import logo from "../img/logo.png";

export default function HeaderOne() {
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
        <div className="h-[150px] w-full bg-[url(img/bottom-banner1.jpg)] bg-cover text-gray-400">
            {/* One Bakhsh start */}
            <div className="bg-[rgba(0,0,0,0.6)] relative flex flex-col justify-between h-full w-full">
                
                {/* nav one start */}
                <nav className="flex w-[90%] mx-auto justify-between p-4 h-6 items-center">
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
                    <ul className="flex space-x-3">
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
                <div className="w-[90%] mx-auto h-full mb-5 flex justify-between items-center">
                    {/* لوگو */}
                    <img src={logo} alt="Logo" />

                    {/* جعبه‌های سرچ و آیکون‌ها */}
                    <div className="flex gap-7">

                        {/* سرچ */}
                        <div className="flex items-center">
                            <input
                                type="search"
                                placeholder="Search for product"
                                className="bg-white py-2 px-24 border-r border-gray-400 rounded-sm rounded-r-none"
                            />
                            <span className="material-symbols-outlined p-2 bg-white rounded-sm rounded-l-none">
                                search
                            </span>
                        </div>

                        {/* آیکون‌ها */}
                        <div className="flex items-center">
                            <button className="border border-gray-500 p-1 rounded-sm rounded-r-none">
                                <span className="material-symbols-outlined hover:cursor-pointer hover:text-green-500">
                                    android_cell_5_bar
                                </span>
                            </button>
                            <button className="border border-l-0 border-gray-500 p-1 rounded-sm rounded-l-none">
                                <span className="material-symbols-outlined hover:cursor-pointer hover:text-green-500">
                                    favorite
                                </span>
                            </button>
                        </div>

                        {/* سبد خرید */}
                        <div className="flex items-center">
                            <button className="py-[5px] px-3 border-r border-gray-400 bg-white rounded-sm rounded-r-none">
                                <span className="material-symbols-outlined">
                                    shopping_cart
                                </span>
                            </button>
                            <button className="py-2 px-12 border-r font-bold border-gray-400 bg-white rounded-sm rounded-l-none">
                                <span className="text-green-400">0</span> MY CART / $0.00
                            </button>
                        </div>
                    </div>
                </div>

                {/* ✅ navbar اصلی با تغییر در حالت اسکرول */}
                <div
                    className={`
                        flex space-x-5 px-5 p-3 h-fit text-white mx-auto transition-all duration-300 ease-in-out
                        ${isScrolled
                            ? "fixed top-0 left-0 w-full bg-emerald-500 z-50 shadow-md"
                            : "absolute custom-clip bg-emerald-400 w-[90%] -bottom-6 left-12"}
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
        </div>
    );
}
