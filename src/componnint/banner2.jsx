import banner from "../img/bottom-banner.jpg"
export default function Banner(){
    return(
        <div className="w-[90%] mx-auto h-[30vh]">
            <img src={banner} alt="" className="h-full w-full" />
        </div>
    )
}