import Logo from "./components/logo/logo";
import Header from "./components/header/header";
import HeroSection from "./components/hero-section/hero-section";
import ExploreCourses from "./components/explore-courses/explore-courses";
import Achievement from "./components/achievement/achievement";
import Achievement2 from "./components/achievement2/achievement2";
import Courses from "./components/courses/courses";
import Team from "./components/team/team";
import Testimonial from "./components/testimonial/testimonial";
import Footer from "./components/footer/footer";





const Home =()=>{
  return(
    <div>
        <Logo></Logo> 
        <Header></Header> 
      <HeroSection></HeroSection> 
      <ExploreCourses></ExploreCourses>
       <Achievement></Achievement>
      <Achievement2></Achievement2>
      <Courses></Courses>
      <Team></Team>
      <Testimonial></Testimonial> 
       <Footer></Footer> 
    </div>
  )
}

export default Home;