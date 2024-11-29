import Image from "next/image";

const Team =()=>{
    return(
        <div className="max-w-[1280px] h-[895px] py-[112px] flex flex-col  gap-[80px] bg-[#F7F7F7] max-sm:py-[48px] max-sm:px-[24px] max-sm:h-auto overflow-hidden max-sm:overflow-hidden">

            {/* heading */}
            <div className="max-w-[768px] h-[109px] gap-[16px]  mx-auto flex flex-col max-sm:w-[363px]">
                <h1 className="font-roboto font-[700] text-[48px] text-center text-primary max-sm:text-[32px]"> Our team </h1>
                <p className="font-roboto font-[400] text-[18px] text-center text-primary"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>

            {/* team container*/}
            <div className="max-w-[1280px] h-[482px] gap-[64px] grid grid-rows-2 grid-cols-3 max-sm:h-auto   max-sm:flex max-sm:flex-col max-sm:gap-[64px] ">
              
              {/* team items 1 */}
              <div className="w-full h-[209px] flex flex-col items-center gap-[24px] max-sm:h-[209px]  ">
                <Image src="/image/team/1-Image.png" alt="logo" width={80} height={80} className="w-[80px] h-[80px]" />
                
                {/* heading/para */}
                <div>
                    <h1 className="font-roboto font-[600] text-[20px] text-center text-primary"> James Nduku </h1>
                    <p className="font-roboto font-[400] text-[18px] text-center text-primary"> Marketing Coordinator </p>
                </div>

                {/* logo */}
                <div className="w-[100px] h-[18px] flex flex-row gap-[14px] justify-center aspect-[0.1]">
                   <Image src="/image/linkdin.png" alt="logo" width={18} height={18} className="" />
                   <Image src="/image/twitter.png" alt="logo" width={18} height={15.3} />
                   <Image src="/image/team/Vector.png" alt="logo" width={18} height={18} />
                </div>
               </div>


                {/* team items 2 */}
              <div className="w-full h-[209px] flex flex-col items-center gap-[24px]">
                <Image src="/image/team/2-Image.png" alt="logo" width={80} height={80} className="w-[80px] h-[80px]" />
                
                {/* heading/para */}
                <div>
                    <h1 className="font-roboto font-[600] text-[20px] text-center text-primary"> Joseph Munyambu </h1>
                    <p className="font-roboto font-[400] text-[18px] text-center text-primary">Nursing Assistant </p>
                </div>

                {/* logo */}
                <div className="w-[100px] h-[18px] flex flex-row gap-[14px] justify-center aspect-[0.1]">
                   <Image src="/image/linkdin.png" alt="logo" width={18} height={18} />
                   <Image src="/image/twitter.png" alt="logo" width={18} height={15.3} />
                   <Image src="/image/team/Vector.png" alt="logo" width={18} height={18} />
                </div>
               </div>


                {/* team items 3 */}
              <div className="w-full h-[209px] flex flex-col items-center gap-[24px]">
                <Image src="/image/team/3-Image.png" alt="logo" width={80} height={80} className="w-[80px] h-[80px]" />
                
                {/* heading/para */}
                <div>
                    <h1 className="font-roboto font-[600] text-[20px] text-center text-primary"> Joseph Ngumbau </h1>
                    <p className="font-roboto font-[400] text-[18px] text-center text-primary"> Medical Assistant </p>
                </div>

                {/* logo */}
                <div className="w-[100px] h-[18px] flex flex-row gap-[14px] justify-center aspect-[0.1]">
                   <Image src="/image/linkdin.png" alt="logo" width={18} height={18} />
                   <Image src="/image/twitter.png" alt="logo" width={18} height={15.3} />
                   <Image src="/image/team/Vector.png" alt="logo" width={18} height={18} />
                </div>
               </div>


                {/* team items 4*/}
              <div className="w-full h-[209px] flex flex-col items-center gap-[24px] max-sm:hidden">
                <Image src="/image/team/4-Image.png" alt="logo" width={80} height={80} className="w-[80px] h-[80px]" />
                
                {/* heading/para */}
                <div>
                    <h1 className="font-roboto font-[600] text-[20px] text-center text-primary"> Erick Kipkemboi </h1>
                    <p className="font-roboto font-[400] text-[18px] text-center text-primary"> Web Designer </p>
                </div>

                {/* logo */}
                <div className="w-[100px] h-[18px] flex flex-row gap-[14px] justify-center aspect-[0.1]">
                   <Image src="/image/linkdin.png" alt="logo" width={18} height={18} />
                   <Image src="/image/twitter.png" alt="logo" width={18} height={15.3} />
                   <Image src="/image/team/Vector.png" alt="logo" width={18} height={18} />
                </div>
               </div>


                {/* team items 5*/}
              <div className="w-full h-[209px] flex flex-col items-center gap-[24px] max-sm:hidden">
                <Image src="/image/team/5-Image.png" alt="logo" width={80} height={80} className="w-[80px] h-[80px]" />
                
                {/* heading/para */}
                <div>
                    <h1 className="font-roboto font-[600] text-[20px] text-center text-primary"> Stephen Kerubo </h1>
                    <p className="font-roboto font-[400] text-[18px] text-center text-primary"> President of Sales </p>
                </div>

                {/* logo */}
                <div className="w-[100px] h-[18px] flex flex-row gap-[14px] justify-center aspect-[0.1]">
                   <Image src="/image/linkdin.png" alt="logo" width={18} height={18} />
                   <Image src="/image/twitter.png" alt="logo" width={18} height={15.3} />
                   <Image src="/image/team/Vector.png" alt="logo" width={18} height={18} />
                </div>
               </div>


                {/* team items 6*/}
              <div className="w-full h-[209px] flex flex-col items-center gap-[24px] max-sm:hidden">
                <Image src="/image/team/6-Image.png" alt="logo" width={80} height={80} className="w-[80px] h-[80px]" />
                
                {/* heading/para */}
                <div>
                    <h1 className="font-roboto font-[600] text-[20px] text-center text-primary"> John Leboo </h1>
                    <p className="font-roboto font-[400] text-[18px] text-center text-primary"> Dog Trainer</p>
                </div>

                {/* logo */}
                <div className="w-[100px] h-[18px] flex flex-row gap-[14px] justify-center aspect-[0.1]">
                   <Image src="/image/linkdin.png" alt="logo" width={18} height={18} />
                   <Image src="/image/twitter.png" alt="logo" width={18} height={15.3} />
                   <Image src="/image/team/Vector.png" alt="logo" width={18} height={18} />
                </div>
               </div>
               
                 {/* button on max-sm */}
            <div className=" max-sm:px-[16px] max-sm:py-[8px] max-sm:w-[95px] max-sm:h-auto max-sm:border-[1px] max-sm:border-primary max-sm:rounded max-sm:m-auto max-sm:block hidden ">
              <button className=" max-sm:font-roboto max-sm:text-[16px] max-sm:text-[primary]"> View All </button>
            </div>

            </div>
            </div>
    )
}

export default Team;