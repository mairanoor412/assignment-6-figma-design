import { DiEnvato } from "react-icons/di";


const Achievement =()=>{
    return(
        <div id="achievement" className="max-w-[1280px] h-[488px]  py-[112px] flex flex-col gap-[24px] items-center bg-secondary max-sm:max-w-[428px] max-sm:py-[48px] max-sm:px-[24px]  overflow-hidden max-sm:overflow-hidden">
            <div className="w-[1152px]  flex flex-col gap-[24px]  m-auto max-sm:max-w-[380px] max-sm:h-[147px] ">
                <h1 className="font-roboto font-[700] text-[48px] text-center text-primary  max-sm:text-[32px] max-sm:text-center"> Our Achivements </h1>
                <p className="w-[1152px]  font-roboto font-[400] text-[18px] text-center text-primary px-14 leading-[27px] max-sm:hidden"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. </p>
                {/* second paragraph */}
               
               <p className=" max-sm:w-[380px]  max-sm:text-start  max-sm:px-7 max-sm:block hidden " > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
               
                </div>

            <div className="w-[1256px] h-[96px] flex flex-row justify-evenly gap-[24px] py-[8px] max-sm:w-[380px] max-sm:h-[176px] max-sm:grid max-sm:grid-cols-2 max-sm:grid-rows-2 max-sm:gap-[24px] max-sm:text-center">
            <div>
                <h1 className="font-roboto font-[700] text-[40px] text-primary"> +200 </h1>
                <p className="font-roboto font-[400] text-[16px] text-primary"> Courses </p>
            </div>

            <div>
                <h1 className="font-roboto font-[700] text-[40px] text-primary"> 50K </h1>
                <p className="font-roboto font-[400] text-[16px] text-primary"> Mentors </p>
            </div>

            <div>
                <h1 className="font-roboto font-[700] text-[40px] text-primary"> 370k </h1>
                <p className="font-roboto font-[400] text-[16px] text-primary"> Students </p>
            </div>

            <div>
                <h1 className="font-roboto font-[700] text-[40px] text-primary"> 100+ </h1>
                <p className="font-roboto font-[400] text-[16px] text-primary"> Recognition </p>
            </div>
            </div>

        </div>
    )
}

export default Achievement;