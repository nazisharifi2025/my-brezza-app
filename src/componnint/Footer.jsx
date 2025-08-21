import pay1 from "../img/payment-1.png"
import pay2 from "../img/payment-2.png"
import pay3 from "../img/payment-3.png"
import pay4 from "../img/payment-4.png"
export default function Footer(){
    return(
        <div className="lg:h-[70vh] md:h-[50vh] h-[120vh] flex-col w-full flex lg:flex-row md:flex-col px-4 justify-between items-center bg-black text-white">
            <div className="flex justify-evenly lg:flex-row md:flex-row flex-col gap-12">
            <ul className="flex flex-col gap-2">
                <li className="font-bold text-xl my-3">My Account</li>
                <li>Login</li>
                <li>About Us</li>
                <li>Wishelist</li>
                <li>Checkout</li>
                <li>FAQs</li>
                <li>Contuct Us</li>
            </ul>
            <ul className="flex flex-col gap-2">
                <li className="font-bold text-xl my-3">Style Advisor</li>
                <li>Your acount</li>
                <li>Information</li>
                <li>Address</li>
                <li>Discount</li>
                <li>Order history</li>
                <li>Additinol information</li>
            </ul>
            <ul className="flex flex-col gap-2">
                <li className="font-bold text-xl my-3">Information</li>
                <li>Site Map</li>
                <li>Search terms</li>
                <li>Advansed search</li>
                <li>Privacy policy</li>
                <li>Suppliers</li>
                <li>Our Stores</li>
            </ul>
            </div>
           <div className="flex flex-col gap-4 ">
            <div>
                <h1 className="font-bold ">SIGN UP FOR EMAILS:</h1>
                <div className="flex items-center gap-3">
                    <input type="text" className="py-2 lg:px-24 md:px-24 px-12 outline-0 text-gray-600 bg-white rounded-sm " placeholder="Enter your Email" />
                    <button className="py-2 px-4 bg-green-400 text-white rounded-sm">Subscribe</button>
                </div>
            </div>
            {/* input indded */}
            <div>
                <h1 className="font-bold ">Follow Us</h1>
                <div className="flex items-center space-x-4 my-4">

<i class="p-3 rounded-full border border-gray-400 text-gray-400 fab fa-facebook-f"></i>   
<i class="p-3 rounded-full border border-gray-400 text-gray-400 fab fa-instagram"></i>   
<i class="p-3 rounded-full border border-gray-400 text-gray-400 fab fa-twitter"></i>     
<i class="p-3 rounded-full border border-gray-400 text-gray-400 fab fa-linkedin-in"></i> 
<i class="p-3 rounded-full border border-gray-400 text-gray-400 fab fa-youtube"></i>    
<i class="p-3 rounded-full border border-gray-400 text-gray-400 fab fa-telegram-plane"></i> 
<i class="p-3 rounded-full border border-gray-400 text-gray-400 fab fa-whatsapp"></i> 

                </div>
            </div>
            <div className="flex space-x-6">
                <img src={pay1} alt="" />
                <img src={pay2} alt="" />
                <img src={pay3} alt="" />
                <img src={pay4} alt="" />
            </div>
           </div>
        </div>
    )
}