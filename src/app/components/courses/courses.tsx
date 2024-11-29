import Image from "next/image";

const Courses =()=>{
    return(
        <div id="courses" className="max-w-[1280px] h-[1742px] py-[112px] flex flex-col gap-[60px] bg-secondary max-sm:py-[48px] max-sm:px-[24px]  overflow-hidden max-sm:overflow-hidden">
            
            {/* heading */}
            <div className="w-[768px] flex flex-col gap-[24px]  mx-auto max-sm:w-[249px] max-sm:h-[93px] max-sm:m-auto">
                <h1 className="font-roboto font-[700] text-[56px] text-center text-primary max-sm:text-[32px]"> Courses </h1>
                <p className="font-roboto font-[400] text-[18px] text-center text-primary">  Your Ultimate Guide to learning </p>
            </div>

            <div className="  w-[336px]  mx-auto   ">
                <ul className="flex flex-row gap-[8px]  ">
                <li className="font-roboto font-[400] text-[16px] text-primary w-[87px] h-[40px] py-[8px] px-[16px]  border-b-[1px] border-primary"> Popular </li>
                <li className="font-roboto font-[400] text-[16px] text-primary w-[140px] h-[40px] py-[8px] px-[16px] "> Recommended</li>
                <li className="font-roboto font-[400] text-[16px] text-primary w-[109px] h-[40px] py-[8px] px-[16px] "> Best  Price </li>
                </ul>
            </div>

            {/* courses */}
            
            <div className="h-[1132px] max-w-[1280px]  grid grid-cols-3 grid-rows-2  gap-y-[64px] gap-x-[12px] max-sm:grid-cols-1 max-sm:grid-rows-3 max-sm:gap-[100px] max-sm:h-[1690px]  ">
                 {/* card 1 */}
                <div className="w-full h-[534px] rounded-[5px] gap-[24px] bg-[#F7F7F7] max-sm:h-[558px]">
                    {/* top image */}
                    <div  className="aspect-w-[2.9] aspect-h-[2.2]">
                        <Image src="/image/courses/1-Image.png" alt="course" width={416} height={300} className="object-cover"/>
                    </div>

                    {/* bottom data */}
                    <div className="h-[210px] w-full px-[16px] py-[24px] flex flex-col gap-[24px]  max-sm:h-[234px]">
                        <div className="h-[122px] w-full  ">
                            <div className="h-[24px] gap-[8px] flex">
                                <p className="font-roboto font-[600] text-[14px] text-primary"> Design </p>
                                
                                
                                <div className="flex items-center justify-end ml-auto gap-[4px]   ">
                                    <Image src="/image/courses/Star 1.png" alt="star" height={24} width={24} />
                                <p className="font-roboto font-[600] text-[14px] text-primary  "> 5.0 </p>
                              </div>

                            </div>

                            <h1 className="font-roboto font-[700] text-[24px] text-primary pt-1 "> UX/UI Design 201 </h1>
                            <p className="font-roboto font-[400] text-[16px] text-primary  pr-10 max-sm:mt-5 max-sm:w-[326px] max-sm:pr-5 "> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. </p>
                        </div>

                        <div className=" flex flex-row gap-[16px] items-center max-sm:pt-8 ">
                        <button className=" py-[8px] px-[20px] rounded-[5px] font-roboto font-[400] text-[13px] border-[1px] border-primary  text-primary"> Enroll Now </button>
                        <p className="font-roboto font-[500] text-[16px]  text-primary"> $400 </p>
                        </div>
                    </div>
                </div>


                 {/* card 2 */}
                 <div className="w-full h-[534px] rounded-[5px] gap-[24px] bg-[#F7F7F7] max-sm:h-[558px]">
                    {/* top image */}
                    <div className="aspect-w-[2.9] aspect-h-[2.2]">
                        <Image src="/image/courses/2-Image.png" alt="course" width={416} height={300} className="object-cover"/>
                    </div>

                    {/* bottom data */}
                    <div className="h-[210px] w-full px-[16px] py-[24px] flex flex-col gap-[24px] max-sm:h-[234px]">
                        <div className="h-[122px] w-full   ">
                            <div className="h-[24px] gap-[8px] flex">
                                <p className="font-roboto font-[600] text-[14px] text-primary"> Programmimg </p>
                                
                                <div className="flex items-center justify-end ml-auto gap-[4px]">
                                    <Image src="/image/courses/Star 1.png" alt="star" height={24} width={24} />
                                <p className="font-roboto font-[600] text-[14px] text-primary  "> 5.0 </p>
                              </div>

                            </div>

                            <h1 className="font-roboto font-[700] text-[24px] text-primary pt-1 "> Introduction to Python </h1>
                            <p className="font-roboto font-[400] text-[16px] text-primary  pr-10 max-sm:mt-5 max-sm:w-[326px] max-sm:pr-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. </p>
                        </div>

                        <div className=" flex flex-row gap-[16px] items-center  max-sm:pt-8 ">
                        <button className=" py-[8px] px-[20px] rounded-[5px] font-roboto font-[400] text-[13px] border-[1px] border-primary  text-primary"> Enroll Now </button>
                        <p className="font-roboto font-[500] text-[16px]  text-primary"> $400 </p>
                        </div>
                    </div>
                
                </div>
                
                  {/* card 3 */}
                <div className="w-full h-[534px] rounded-[5px] gap-[24px] bg-[#F7F7F7] max-sm:h-[558px] ">
                    {/* top image */}
                    <div className="aspect-w-[2.9] aspect-h-[2.2]">
                        <Image src="/image/courses/3-Image.png" alt="course" width={416} height={300}/>
                    </div>

                    {/* bottom data */}
                    <div className="h-[210px] w-full px-[16px] py-[24px] flex flex-col gap-[24px] max-sm:h-[234px]">
                        <div className="h-[122px] w-full   ">
                            <div className="h-[24px] gap-[8px] flex">
                                <p className="font-roboto font-[600] text-[14px] text-primary"> Business </p>
                                
                                <div className="flex items-center justify-end ml-auto gap-[4px]">
                                    <Image src="/image/courses/Star 1.png" alt="star" height={24} width={24} />
                                <p className="font-roboto font-[600] text-[14px] text-primary  "> 5.0 </p>
                              </div>

                            </div>

                            <h1 className="font-roboto font-[700] text-[24px] text-primary pt-1 "> Data Analysis for Beginners </h1>
                            <p className="font-roboto font-[400] text-[16px] text-primary  pr-10 max-sm:mt-5 max-sm:w-[326px] max-sm:pr-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. </p>
                        </div>

                        <div className=" flex flex-row gap-[16px] items-center  max-sm:pt-8 ">
                        <button className=" py-[8px] px-[20px] rounded-[5px] font-roboto font-[400] text-[13px] border-[1px] border-primary  text-primary"> Enroll Now </button>
                        <p className="font-roboto font-[500] text-[16px]  text-primary"> $400 </p>
                        </div>
                    </div>
                
                </div>
                


                 {/* card 4 */}
                 <div className="w-full h-[534px] rounded-[5px] gap-[24px] bg-[#F7F7F7] max-sm:hidden">
                    {/* top image */}
                    <div  className="aspect-w-[2.9] aspect-h-[2.2]">
                        <Image src="/image/courses/4-Image.png" alt="course" width={416} height={300}/>
                    </div>

                    {/* bottom data */}
                    <div className="h-[210px] w-full px-[16px] py-[24px] flex flex-col gap-[24px]">
                        <div className="h-[122px] w-full   ">
                            <div className="h-[24px] gap-[8px] flex">
                                <p className="font-roboto font-[600] text-[14px] text-primary"> Art </p>
                                
                                <div className="flex items-center justify-end ml-auto gap-[4px]">
                                    <Image src="/image/courses/Star 1.png" alt="star" height={24} width={24} />
                                <p className="font-roboto font-[600] text-[14px] text-primary  "> 5.0 </p>
                              </div>

                            </div>

                            <h1 className="font-roboto font-[700] text-[24px] text-primary pt-1 "> Art Specialization </h1>
                            <p className="font-roboto font-[400] text-[16px] text-primary  pr-10"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. </p>
                        </div>

                        <div className=" flex flex-row gap-[16px] items-center  ">
                        <button className=" py-[8px] px-[20px] rounded-[5px] font-roboto font-[400] text-[13px] border-[1px] border-primary  text-primary"> Enroll Now </button>
                        <p className="font-roboto font-[500] text-[16px]  text-primary"> $400 </p>
                        </div>
                    </div>
                
                </div>
                



                 {/* card 5 */}
                 <div className="w-full h-[534px] rounded-[5px] gap-[24px] bg-[#F7F7F7] max-sm:hidden ">
                    {/* top image */}
                    <div  className="aspect-w-[2.9] aspect-h-[2.2]">
                        <Image src="/image/courses/5-Image.png" alt="course" width={416} height={300}/>
                    </div>

                    {/* bottom data */}
                    <div className="h-[210px] w-full px-[16px] py-[24px] flex flex-col gap-[24px]">
                        <div className="h-[122px] w-full   ">
                            <div className="h-[24px] gap-[8px] flex">
                                <p className="font-roboto font-[600] text-[14px] text-primary"> Law </p>
                                
                                <div className="flex items-center justify-end ml-auto gap-[4px]">
                                    <Image src="/image/courses/Star 1.png" alt="star" height={24} width={24} />
                                <p className="font-roboto font-[600] text-[14px] text-primary  "> 5.0 </p>
                              </div>

                            </div>

                            <h1 className="font-roboto font-[700] text-[24px] text-primary pt-1 "> Rule of Law </h1>
                            <p className="font-roboto font-[400] text-[16px] text-primary  pr-10"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. </p>
                        </div>

                        <div className=" flex flex-row gap-[16px] items-center  ">
                        <button className=" py-[8px] px-[20px] rounded-[5px] font-roboto font-[400] text-[13px] border-[1px] border-primary  text-primary"> Enroll Now </button>
                        <p className="font-roboto font-[500] text-[16px]  text-primary"> $400 </p>
                        </div>
                    </div>
                
                </div>
                



                 {/* card 6 */}
                 <div className="w-full h-[534px] rounded-[5px] gap-[24px] bg-[#F7F7F7] max-sm:hidden">
                    {/* top image */}
                    <div  className="aspect-w-[2.9] aspect-h-[2.2]">
                        <Image src="/image/courses/6-Image.png" alt="course" width={416} height={300}/>
                    </div>

                    {/* bottom data */}
                    <div className="h-[210px] w-full px-[16px] py-[24px] flex flex-col gap-[24px]">
                        <div className="h-[122px] w-full   ">
                            <div className="h-[24px] gap-[8px] flex">
                                <p className="font-roboto font-[600] text-[14px] text-primary"> Tech </p>
                                
                                <div className="flex items-center justify-end ml-auto gap-[4px]">
                                    <Image src="/image/courses/Star 1.png" alt="star" height={24} width={24} />
                                <p className="font-roboto font-[600] text-[14px] text-primary  "> 5.0 </p>
                              </div>

                            </div>

                            <h1 className="font-roboto font-[700] text-[24px] text-primary pt-1 ">Introduction to webflow </h1>
                            <p className="font-roboto font-[400] text-[16px] text-primary  pr-10"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. </p>
                        </div>

                        <div className=" flex flex-row gap-[16px] items-center  ">
                        <button className=" py-[8px] px-[20px] rounded-[5px] font-roboto font-[400] text-[13px] border-[1px] border-primary  text-primary"> Enroll Now </button>
                        <p className="font-roboto font-[500] text-[16px]  text-primary"> $400 </p>
                        </div>
                    </div>
                
                </div>
                

             </div>
             
             {/* buttom */}
             <div className=" m-auto   py-[8px] px-[16px] border-[1px] border-primary text-center rounded-[5px] max-sm:mt-5 ">
                <button className=" font-roboto font-[400] text-[16px] text-primary ">View All Courses</button>
             </div>
             
        </div>
        
        
    )
}

export default Courses;