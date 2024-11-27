import Image from "next/image";


const Footer =()=>{
    return(
        <div className="max-w-[1280px] h-[684px] p-[80px] gap-[80px] bg-secondary  overflow-x-hidden max-sm:overflow-x-hidden max-sm:py-[48px] max-sm:px-[24px] max-sm:gap-[48px]">
            
            {/* container */}
            <div className="max-w-[1120px] h-[524px]  flex flex-col gap-[80px]  m-auto max-sm:h-[1315px] max-sm:flex-col">
               
                 {/* TOP */}
                <div className=" h-[82px]  flex justify-between max-md:flex-col  max-sm:h-[261px]">
                    {/* top left heading/para */}
                    <div className="max-sm:h-[91px] max-sm:w-[287px] max-sm:mx-auto max-sm:text-center max-sm:pr-8" >
                        <h1 className="font-roboto font-[600] text-[18px] text-primary"> Subscribe to our newsletter </h1>
                        <p className="font-roboto font-[400] text-[16px] text-primary"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    {/* top right input/para */}
                    <div className="flex flex-col justify-between max-sm:flex-col max-sm:h-[146px] max-sm:gap-[16px] ">
                        <div className="h-[48px]  flex gap-[16px] max-sm:flex-col ">
                        <input type="text" id="email" placeholder="Enter your email" required className="border-primary border-[1px] rounded-[5px] pl-2 w-[265px] max-sm:w-full "/>
                        <button className="font-roboto font-[400] text-[16px] py-[12px] px-[24px] border-[1px] border-primary rounded-[5px] w-[119px] max-sm:w-full "> Subscribe </button>
                        </div>
                        <p className="font-roboto font-[400] text-[12px] text-primary max-sm:text-center"> By subscribing you agree to with our Privacy Policy</p>
                    </div>
                </div>

                {/* MID */}
                <div className=" h-[225px] grid grid-cols-4 gap-[40px] max-sm:h-[811px] max-sm:w-[172px] max-sm:mx-auto max-sm:grid-cols-1  ">

                    {/* right logo */}
                    <div>
                    <Image src="/image/nav-logo.png" alt="Ddsgnr" width={130.6} height={41} />
                    </div>

                    {/* left data */}
                    <div className="max-w-[250px]  flex flex-col gap-[16px] ">
                        <h1 className="font-roboto font-[600] text-[16px] text-primary max-sm:text-center"> Courses </h1>
                        <ul className="font-roboto font-[400] text-[14px] text-primary flex flex-col gap-[16px] max-sm:text-center">
                            <li> Business </li>
                            <li> Development </li>
                            <li> Technology</li>
                            <li> Design </li>
                            <li> Programming </li>
                        </ul>
                    </div>

                    <div  className="max-w-[250px] flex flex-col gap-[16px]">
                        <h1 className="font-roboto font-[600] text-[16px] text-primary max-sm:text-center"> Resources </h1>
                        <ul className="font-roboto font-[400] text-[14px] text-primary flex flex-col gap-[16px] max-sm:text-center">
                            <li> Career</li>
                            <li> Resume </li>
                            <li> Learning </li>
                            <li> Interview Preparation </li>
                            <li> Jobs </li>
                        </ul>
                    </div>

                    <div  className="max-w-[250px]  flex flex-col gap-[16px]">
                        <h1 className="font-roboto font-[600] text-[16px] text-primary max-sm:text-center"> About Us </h1>
                        <ul className="font-roboto font-[400] text-[14px] text-primary flex flex-col gap-[16px] max-sm:text-center">
                            <li> Contact </li>
                            <li> Help/Support </li>
                            <li> FAQ </li>
                            <li> Terms and Conditions</li>
                            <li> Partners </li>
                        </ul>
                    </div>

                </div>

              
               {/* BOTTOM */}
                <div className=" h-[57px] max-w-[1120px] max-sm:h-[147px] max-sm:flex-col justify-around">
                    
                   <hr className="border-primary w-full"></hr>
                   
                   
                   <p className="hidden max-sm:block max-sm:text-center max-sm:font-roboto max-sm:text-[14px] max-sm:pt-5 "> 2023 Ddsgnr. All right reserved. </p>
                    <div className=" h-[57px] flex justify-start items-end max-sm:grid max-sm:grid-cols-1 max-sm:h-[114px] ">
                    <div className="h-[24px] max-sm:flex max-sm:flex-col">
                       
                        <ul className="font-roboto font-[400] text-[14px] text-primary flex justify-around gap-[24px] ">
                            <li className="max-sm:hidden"> 2023 Ddsgnr. All right reserved. </li>
                            <li className="underline"> Privacy Policy </li>
                            <li className="underline"> Terms of Service </li>
                            <li className="underline"> Cookies Settings </li>
                        </ul>
                    </div>

                    {/* logo */}
                    <div className="flex  gap-[12px] ml-auto max-sm:justify-center max-sm:ml-0">
                    <Image src="/image/Facebook.png" alt="logo" width={10} height={18} className="h-[18px] w-[15px]" />
                    <Image src="/image/insta.png" alt="logo" width={18} height={18} className="h-[18px] w-[18px]"/>
                    <Image src="/image/twitter.png" alt="logo" width={18} height={15.3} className="h-[15.3px] w-[10px]" />
                    <Image src="/image/linkdin.png" alt="logo" width={18} height={18} className="h-[18px] w-[18px]"/>
                    </div>
                    </div>
                </div>

              </div>
            </div>
        
    )
}

export default Footer;