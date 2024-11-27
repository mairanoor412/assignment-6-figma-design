import Image from "next/image";

const Testimonial =()=>{
    return(
        <div id="testimonial" className="max-w-[1280px]  h-[830.89px] py-[112px] px-[64px] flex flex-col gap-[80px] bg-[#F7F7F7] max-sm:py-[48px] max-sm:px-[24px]  overflow-hidden max-sm:overflow-hidden max-sm:flex max-sm:flex-col max-sm:gap-[48px]">

            {/* heading/para */}
            <div className="max-w-[560px] h-[109px] flex flex-col justify-between max-sm:w-[361px] max-sm:h-[120px] max-sm:mx-auto max-sm:text-center ">
                <h1 className="font-roboto font-[700] text-[48px] text-primary max-sm:hidden"> Customer testimonials </h1>
                <h1 className="max-sm:font-roboto max-sm:font-[700] max-sm:text-[32px] max-sm:text-primary hidden max-sm:block"> What Our Student Say </h1>
                <p className="font-roboto font-[400] text-[18px] text-primary"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* card container */}
            <div className="w-full h-[417.89px] grid grid-cols-3 gap-[32px] max-sm:grid-cols-1">

                {/* card item 1 */}
                 <div className="w-full h-[321.89px] border-[1px] border-primary p-[32px] flex flex-col gap-[24px]">
                    <div className="w-[116px] flex gap-[4px] ">
                        <Image src="/image/testimonial/1-Vector.png" alt="star" width={20} height={18.89} />
                        <Image src="/image/testimonial/1-Vector.png" alt="star" width={20} height={18.89} />
                        <Image src="/image/testimonial/1-Vector.png" alt="star" width={20} height={18.89} />
                        <Image src="/image/testimonial/1-Vector.png" alt="star" width={20} height={18.89} />
                        <Image src="/image/testimonial/1-Vector.png" alt="star" width={20} height={18.89} />
                    </div>

                    <div className="w-[298.67px] h-[215px] flex flex-col gap-[24px]">
                        <p className="font-roboto font-[400] text-[18px] text-primary pr-4"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

                        {/* image */}
                        <div className="w-[215px] h-[56px] gap-[20px] flex flex-row items-center">
                            <Image src="/image/testimonial/1-Avatar Image.png" alt="image" width={56} height={56} />

                            <div className="font-roboto font-[600] text-[16px] text-primary">
                                <h1 className="font-roboto font-[400] text-[16px] text-primary"> James Nduku </h1>
                                <p> Software Developer </p>
                            </div>
                        </div>
                    </div>
                 </div>


                 {/* card item 2 */}
                 <div className="w-full h-[321.89px] border-[1px] border-primary p-[32px] flex flex-col gap-[24px] max-sm:hidden">
                    <div className="w-[116px] flex gap-[4px] ">
                        <Image src="/image/testimonial/1-Vector.png" alt="star" width={20} height={18.89} />
                        <Image src="/image/testimonial/1-Vector.png" alt="star" width={20} height={18.89} />
                        <Image src="/image/testimonial/1-Vector.png" alt="star" width={20} height={18.89} />
                        <Image src="/image/testimonial/1-Vector.png" alt="star" width={20} height={18.89} />
                        <Image src="/image/testimonial/1-Vector.png" alt="star" width={20} height={18.89} />
                    </div>

                    <div className="w-[298.67px] h-[215px] flex flex-col gap-[24px]">
                        <p className="font-roboto font-[400] text-[18px] text-primary pr-4"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

                        {/* image */}
                        <div className="w-[215px] h-[56px] gap-[20px] flex flex-row items-center">
                            <Image src="/image/testimonial/2-Avatar Image.png" alt="image" width={56} height={56} />

                            <div className="font-roboto font-[600] text-[16px] text-primary">
                                <h1 className="font-roboto font-[400] text-[16px] text-primary"> Erick Kipkemboi </h1>
                                <p> Scrum Master </p>
                            </div>
                        </div>
                    </div>
                 </div>


                 {/* card item 3 */}
                 <div className="w-full h-[321.89px] border-[1px] border-primary p-[32px] flex flex-col gap-[24px] max-sm:hidden">
                    <div className="w-[116px] flex gap-[4px] ">
                        <Image src="/image/testimonial/1-Vector.png" alt="star" width={20} height={18.89} />
                        <Image src="/image/testimonial/1-Vector.png" alt="star" width={20} height={18.89} />
                        <Image src="/image/testimonial/1-Vector.png" alt="star" width={20} height={18.89} />
                        <Image src="/image/testimonial/1-Vector.png" alt="star" width={20} height={18.89} />
                        <Image src="/image/testimonial/1-Vector.png" alt="star" width={20} height={18.89} />
                    </div>

                    <div className="w-[298.67px] h-[215px] flex flex-col gap-[24px]">
                        <p className="font-roboto font-[400] text-[18px] text-primary pr-4"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

                        {/* image */}
                        <div className="w-[215px] h-[56px] gap-[20px] flex flex-row items-center">
                            <Image src="/image/testimonial/3-Avatar Image.png" alt="image" width={56} height={56} />

                            <div className="font-roboto font-[600] text-[16px] text-primary">
                                <h1 className="font-roboto font-[400] text-[16px] text-primary"> Stephen Kerubo </h1>
                                <p> UI/UX Designer </p>
                            </div>
                        </div>
                    </div>
                 </div>
                 
                 {/* sliders */}
                 <div className="flex justify-between items-center w-[1152px] max-sm:w-[380px]" >
                    <Image src="/image/testimonial/Slider Dots.png" alt="slider" width={72} height={8} className="w-[72px] h-[8px]"/>
                    <Image src="/image/testimonial/Slider Buttons.png" alt="slider" width={90} height={38} className="w-[90px] h-[38px] text-primary" />
                 </div>

            </div>
        </div>
    
    )
}

export default Testimonial;