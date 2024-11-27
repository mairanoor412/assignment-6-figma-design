import Image from "next/image";

const Logo =()=>{
    return(
        <div className=" h-[54px] max-w-[1280px]  bg-[#F7F7F7]  shadow-[inset_0px_-1px_0px_0px_#000000] max-sm:hidden  overflow-x-hidden max-sm:overflow-x-hidden ">

            {/* container */}
            <div className=" max-w-[1154px] h-[54px] m-auto flex items-center">

                {/*left content */}
                <div className=" flex flex-row gap-[16px] max-w-[386px]  justify-between">
                    <div className="font-roboto font-[400] text-[14px] text-primary"> Phone Number: 956 742 455 678 </div> 
                    <span className=" border-l-[1px] border-[#676767]"></span>
                    <div className="font-roboto font-[400] text-[14px] text-primary"> Email:info@ddsgnr.com </div>
                </div>

                {/* right logo */}
                <div className=" flex justify-between max-w-[132px]  h-[18px] text-primary ml-auto gap-[12px] ">
                    <Image src="/image/facebook.png" alt="logo" width={15} height={18} />
                    <Image src="/image/insta.png" alt="logo" width={18} height={18} />
                    <Image src="/image/twitter.png" alt="logo" width={18} height={15.3} />
                    <Image src="/image/linkdin.png" alt="logo" width={18} height={18} />
                </div>

            </div>

        </div>
    )
}

export default Logo;