import Image from "next/image";
import Link from "next/link";

const Header =()=>{
    return(
        <section className="bg-[#F7F7F7] h-[72px] max-w-[1280px] mt-3 flex border-b-[1px] border-[#676767]  max-sm:bg-secondary  overflow-x-hidden max-sm:overflow-x-hidden max-sm:h-[72px] max-sm:mt-0 max-sm:items-center">

            
            {/* container */}
            <div className=" w-[1152px] h-[44px] m-auto flex items-center  max-sm:m-0  max-sm:items-center">

                 {/* logo */}
             <div className="text-primary max-sm:flex max-sm:justify-between w-full max-sm:w-[380px] max-sm:h-[48px] max-sm:mx-auto ">
                    <Image src="/image/nav-logo.png" alt="Ddsgnr" width={130.6} height={41} />
                    <div className="max-sm:flex max-md:items-center justify-end hidden ">
                    <Image src="/image/Column.png" alt="menu" width={48} height={48} className="max-sm:w-[48px] max-sm-h-[48px]" />
                    </div>
                </div>

                {/*nav*/}
                <div className="flex h-[44px] max-w-[910px] items-center  text-primary ml-auto bg-secondary max-sm:w-[428px] gap-[32px] max-sm:hidden">
                <ul className="flex gap-[32px] w-[687px] justify-start">
                    <li className="font-roboto font-[400] text-[16px] w-[64px] h-[44px]  border-b-2  border-primary flex justify-center items-center ">
                        <Link href="/" target="_blank"  > Home </Link>
                    </li>

                    <li className="font-roboto font-[400] text-[16px] w-[79px] h-[44px]  flex justify-center items-center ">
                        <Link href="#courses" target="_blank"> Courses </Link>
                    </li>

                    <li className="font-roboto font-[400] text-[16px] w-[81px] h-[44px]  flex justify-center items-center ">
                        <Link href="/" target="_blank"> Services </Link>
                    </li>

                    <li className="font-roboto font-[400] text-[16px] w-[113px] h-[44px] flex justify-center items-center ">
                        <Link href="#achievement" target="_blank"> Achievement </Link>
                    </li>

                    <li className="font-roboto font-[400] text-[16px] w-[86px] h-[44px] flex justify-center items-center ">
                        <Link href="/" target="_blank"> About Us </Link>
                    </li>

                    <li className="font-roboto font-[400] text-[16px] w-[104px] h-[44px]  flex justify-center items-center ">
                        <Link href="#testimonial" target="_blank"> Testimonial </Link>
                    </li>
                    </ul>
                

                {/* button */}
                <div className=" flex max-w-[191px] items-center gap-[16px] ml-auto ">
                    <button className="font-roboto font-[400] text-[16px] h-[40px] w-[80px] text-primary border-[1px] border-primary px-[20px] py-[8px] rounded-[5px] "> Login </button>
                    <button className="font-roboto font-[400] text-[16px] h-[40px] w-[95px]  bg-primary px-[20px] py-[8px] text-secondary rounded-[5px]"> Sign Up </button>
                </div>
                </div>
                
          
            </div>
        
        </section>
    ) 
}

export default Header;