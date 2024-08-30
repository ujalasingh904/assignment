import { BsRocketTakeoff } from "react-icons/bs";

const Heading = () => {
    return (
        <div className=" pt-2 sm:pt-8 pb-5 flex justify-center items-center">
            <div className="w-[90%] lg:w-[80%] flex flex-col gap-2 sm:gap-6 text-center">
                {/* rocket icon and main heading */}

                <div className="flex justify-around md:justify-center items-center w-full text-[1.2rem] sm:text-4xl md:text-6xl">
                    <div className="translate-y-1 sm:translate-y-3 order-2 md:order-1 animate">
                        <BsRocketTakeoff className="dark:text-pink-500 rocket-rotate" />
                    </div>
                    <h1 className="font-semibold ml-2 order-1 md:order-2 ">Launching New Module Soon</h1>
                </div>
                {/* sub heading */}
                <div className="text-center text-[#605757] text-sm md:text-xl">
                    <p className="text-center mt-2">Exciting things are in the works! We're currently <span className="font-bold text-black dark:text-white">Crafting a new feature </span>for you</p>
                    <p>Keep an eye out for updates - we're working to make it available soon</p>
                </div>    


            </div>

        </div>
    )
}

export default Heading