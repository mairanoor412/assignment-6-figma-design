import Image from "next/image";

const HeroSection =()=>{
    return(
    <div className="max-sm:h-screen max-sm:w-full overflow-x-hidden max-sm:overflow-x-hidden">
        
        <div className="h-[800px] max-w-[1280px] grid grid-cols-2  gap-[24px]  bg-secondary  max-sm:flex max-sm:flex-col overflow-x-hidden max-sm:overflow-x-hidden max-sm:py-[64px] max-sm:h-[770px] max-sm:w-full ">
            
            {/* left section data */}
            <div className="flex flex-col justify-center  max-w-[640px]  pl-[80px]  gap-[36px]  max-sm:w-full max-sm:pl-5">
                <div className=" max-w-[500px] h-[212px] max-sm:h-[174px] max-sm:w-[380px]  ">
                <h1 className=" max-w-[500px]   font-roboto font-[700] text-[56px] leading-[67.2px] text-primary max-sm:text-[40px] max-sm:leading-[48px]"> Learn new skills online with ease </h1>
                <p className=" max-w-[500px] h-[54px] pr-10 mt-7  font-roboto font-[400] text-[18px] leading-[27px] text-primary max-sm:pr-0 "> Discover a wide range of courses covering a variety of subjects, taught by expert instructors. </p>
                 </div>
                 
                 {/* buttons */}
                 <div className="flex gap-[16px] w-[358px]  max-sm:text-center  max-sm:gap-[8px]">              
                <button className="py-[12px]  px-[24px] font-roboto font-[400] text-[16px] text-secondary bg-primary border-[1px] border-primary rounded-[5px]"> Start learning now </button>
                <button className="py-[12px] px-[24px] font-roboto font-[400] text-[16px] text-primary  border-[1px] border-primary rounded-[5px]"> Explore Courses </button>
                </div>
            </div>

            {/* right section image */}
            <div className="aspect-w-3 aspect-h-[3.6] max-sm:aspect-w-1 max-sm:aspect-h-1 " >
                <Image className="object-fill" src="/image/hero-image.png" alt="image" width={720} height={400}  />
            </div>

        </div>


        

        {/* bottom part */}
        <div className="h-[228px] max-w-[1280px] flex flex-row items-center bg-[#F7F7F7] max-sm:flex-col max-sm:h-[239.34px] max-sm:px-[24px] max-sm:py-[48px] max-sm:items-start max-md:gap-[24px]">
            {/* left */}
            <div className="max-sm:flex max-sm:items-start">
                <p className="w-[320px] font-roboto font-[700] text-[24px] leading-[33.6px] text-primary max-sm:hidden" > Trusted by 2000+ companies worldwide. </p>
                <p className="max-sm:font-roboto max-sm:font-[700] max-sm:text-[18px] max-sm:text-primary max-sm:w-[327px] hidden max-sm:block  text-start"> Trusted by the world's best companies [social proof to build credibility]</p>
            </div>

            {/* right images*/}
            <div className="max-w-[880px] h-[56px] flex flex-row justify-end ml-auto py-[8.74px] gap-[19.12px] max-sm:pb-[5px]  max-sm:gap-[16px] max-sm:justify-start max-sm:h-[78px] max-sm:w-full  ">
                <Image src="/image/1-Airbnb Logo.png" alt="airbnb" width={123.8} height={38.52}/>
                <Image src="/image/2-Airbnb Logo.png" alt="airbnb" width={123.8} height={38.52}/>
                <Image src="/image/3-Airbnb Logo.png" alt="airbnb" width={123.8} height={38.52}/>
                <Image src="/image/4-Airbnb Logo.png" alt="airbnb" width={123.8} height={38.52} className="max-sm:hidden"/>
                <Image src="/image/5-Airbnb Logo.png" alt="airbnb" width={123.8} height={38.52} className="max-sm:hidden" />
                <Image src="/image/6-Airbnb Logo.png" alt="airbnb" width={123.8} height={38.52} className="max-sm:hidden" />
            </div>
        </div>
        
     </div>

    )
}

export default HeroSection;










