import Image from "next/image";
import { Button } from "@/components/ui/button"


const ExploreCourses =()=>{
    return(
        <div className="h-[1049px] max-w-[1280px] bg-secondary py-[112px] max-sm:max-w-[428px] max-sm:py-[48px] max-sm:px-[24px]  overflow-hidden max-sm:overflow-hidden">
            {/* heading */}
            <div className="max-w-[768px] pb-[70px]  m-auto  flex flex-col gap-[24px] max-sm:w-[385px] max-sm:h-[162px]  max-sm:text-center max-sm:m-auto">
                <h1 className="font-roboto font-[700] text-[48px] text-primary max-sm:text-[32px]">Explore Courses By Category</h1>
                <p className="font-roboto font-[400] text-[18px] text-primary max-sm:text-[18px] max-sm:pl-10"> Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
            </div>

            {/* courses container */}
            <div className="h-[636px] grid grid-cols-3 grid-rows-3 gap-[24px] max-sm:grid-cols-1 max-sm:grid-rows-3 max-sm:gap-[64px] max-sm:mt-14 ">

                {/* courses-1 */}
                <div className="h-[132px] w-full rounded-[5px] p-[16px] bg-[#F7F7F7] flex gap-[32px] items-center">
                {/*image  */}
                <div className="h-[100px] w-[100px] p-[34px] rounded-[5px] bg-secondary">
                    <Image src="/image/explore-courses/1-pen-tool2.png" alt="courses" width={32} height={32}/>
                   
                </div>

                {/* course name */}
                <div className=" max-w-[246.67px] h-[57px] ">
                    <h1 className="font-roboto font-[600] text-[20px] text-primary"> Design & Development </h1>
                    <p className="font-roboto font-[400] text-[18px] text-primary"> 50+ Courses Available </p>
                </div>
                </div>


                 {/* courses-2 */}
                 <div className="h-[132px] w-full rounded-[5px] p-[16px] bg-[#F7F7F7] flex gap-[32px] items-center">
                {/*image  */}
                <div className="h-[100px] w-[100px]  rounded-[5px] bg-secondary">
                    <Image src="/image/explore-courses/2-Frame 292.png" alt="courses" width={100} height={100} className="w-[100px] h-[100px"/>
                </div>

                {/* course name */}
                <div className=" max-w-[246.67px] h-[57px] ">
                    <h1 className="font-roboto font-[600] text-[20px] text-primary"> Marketing </h1>
                    <p className="font-roboto font-[400] text-[18px] text-primary"> 50+ Courses Available </p>
                </div>
                </div>

                 {/* courses-3 */}
                 <div className="h-[132px] w-full rounded-[5px] p-[16px] bg-[#F7F7F7] flex gap-[32px] items-center">
                {/*image  */}
                <div className="h-[100px] w-[100px]  rounded-[5px] bg-secondary">
                    <Image src="/image/explore-courses/3-Frame 292.png" alt="courses" width={100} height={100}/>
                </div>

                {/* course name */}
                <div className=" max-w-[246.67px] h-[57px] ">
                    <h1 className="font-roboto font-[600] text-[20px] text-primary"> Development </h1>
                    <p className="font-roboto font-[400] text-[18px] text-primary"> 50+ Courses Available </p>
                </div>
                </div>

                 {/* courses-4 */}
                 <div className="h-[132px] w-full rounded-[5px] p-[16px] bg-[#F7F7F7] flex gap-[32px] items-center max-sm:hidden">
                {/*image  */}
                <div className="h-[100px] w-[100px]  rounded-[5px] bg-secondary">
                    <Image src="/image/explore-courses/4-Frame 292.png" alt="courses" width={100} height={100}/>
                </div>

                {/* course name */}
                <div className=" max-w-[246.67px] h-[57px] ">
                    <h1 className="font-roboto font-[600] text-[20px] text-primary"> Communication </h1>
                    <p className="font-roboto font-[400] text-[18px] text-primary"> 50+ Courses Available </p>
                </div>
                </div>

                 {/* courses-5 */}
                 <div className="h-[132px] w-full rounded-[5px] p-[16px] bg-[#F7F7F7] flex gap-[32px] items-center max-sm:hidden">
                {/*image  */}
                <div className="h-[100px] w-[100px]  rounded-[5px] bg-secondary">
                    <Image src="/image/explore-courses/5-Frame 292.png" alt="courses" width={100} height={100}/>
                </div>

                {/* course name */}
                <div className=" max-w-[246.67px] h-[57px] ">
                    <h1 className="font-roboto font-[600] text-[20px] text-primary"> Digital Marketing </h1>
                    <p className="font-roboto font-[400] text-[18px] text-primary"> 50+ Courses Available </p>
                </div>
                </div>

                 {/* courses-6 */}
                 <div className="h-[132px] w-full rounded-[5px] p-[16px] bg-[#F7F7F7] flex gap-[32px] items-center max-sm:hidden">
                {/*image  */}
                <div className="h-[100px] w-[100px]  rounded-[5px] bg-secondary">
                    <Image src="/image/explore-courses/6-Frame 292.png" alt="courses" width={100} height={100}/>
                </div>

                {/* course name */}
                <div className=" max-w-[246.67px] h-[57px] ">
                    <h1 className="font-roboto font-[600] text-[20px] text-primary"> Self Development </h1>
                    <p className="font-roboto font-[400] text-[18px] text-primary"> 50+ Courses Available </p>
                </div>
                </div>

                 {/* courses-7 */}
                 <div className="h-[132px] w-full rounded-[5px] p-[16px] bg-[#F7F7F7] flex gap-[32px] items-center max-sm:hidden">
                {/*image  */}
                <div className="h-[100px] w-[100px] rounded-[5px] bg-secondary">
                    <Image src="/image/explore-courses/7-Frame 292.png" alt="courses" width={100} height={100}/>
                </div>

                {/* course name */}
                <div className=" max-w-[246.67px] h-[57px] ">
                    <h1 className="font-roboto font-[600] text-[20px] text-primary"> Business </h1>
                    <p className="font-roboto font-[400] text-[18px] text-primary"> 50+ Courses Available </p>
                </div>
                </div>

                 {/* courses-8 */}
                 <div className="h-[132px] w-full rounded-[5px] p-[16px] bg-[#F7F7F7] flex gap-[32px] items-center max-sm:hidden">
                {/*image  */}
                <div className="h-[100px] w-[100px]  rounded-[5px] bg-secondary">
                    <Image src="/image/explore-courses/8-Frame 292.png" alt="courses" width={100} height={100}/>
                </div>

                {/* course name */}
                <div className=" max-w-[246.67px] h-[57px] ">
                    <h1 className="font-roboto font-[600] text-[20px] text-primary"> Finance </h1>
                    <p className="font-roboto font-[400] text-[18px] text-primary"> 50+ Courses Available </p>
                </div>
                </div>

                 {/* courses-9 */}
                 <div className="h-[132px] w-full rounded-[5px] p-[16px] bg-[#F7F7F7] flex gap-[32px] items-center max-sm:hidden">
                {/*image  */}
                <div className="h-[100px] w-[100px]  rounded-[5px] bg-secondary">
                    <Image src="/image/explore-courses/9-Frame 292.png" alt="courses" width={100} height={100}/>
                </div>

                {/* course name */}
                <div className=" max-w-[246.67px] h-[57px] ">
                    <h1 className="font-roboto font-[600] text-[20px] text-primary"> Consulting </h1>
                    <p className="font-roboto font-[400] text-[18px] text-primary"> 50+ Courses Available </p>
                </div>
                </div>

             
            </div>

              {/* button */}
              {/* <div className=" max-w-[155px] h-[48px] flex justify-center m-auto  border-[1px] border-primary rounded-[5px]">
                    <button className="font-roboto font-[400] text-[16px]  "> View All Courses </button>
                </div> */}
               
               {/* button used shadcn */}
            <div className="flex justify-center  ">
              <Button variant={"figma"} size={"lap"}>View All Courses</Button>
              </div>



            

                
        </div>
    )
}

export default ExploreCourses;