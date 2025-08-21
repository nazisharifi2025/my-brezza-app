import banner from "../img/bottom-banner.jpg"
export default function Banner(){
    return(
        <div className="lg:w-[90%] md:w-full mx-auto lg:h-[30vh] md:h-[25vh] h-[25vh]">
            <img src={banner} alt="" className="h-full w-full" />
        </div>
    )
}