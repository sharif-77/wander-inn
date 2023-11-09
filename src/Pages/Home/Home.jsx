import { Helmet } from "react-helmet";
import Banner from "../../componenst/Banner/Banner";
import ExclusiveOffers from "../../componenst/ExclusiveOffers/ExclusiveOffers";
import Testimonials from "../../componenst/Testimonials/Testimonials";
import FeaturedRooms from "../../componenst/FeaturedRooms/FeaturedRooms";
import { useEffect } from "react";
import Aos from "aos";


const Home = () => {

  useEffect(() => {
    const banner = document.querySelector(".parallax-item");
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      banner.style.transform = `translateY(${scrollY * 0.5}px)`; 
    });
  }, []);
  
  
  useEffect(()=>{
    Aos.init()
},[])

  return (
    <main>
      <Helmet>
        <title>WanderInn</title>
      </Helmet>

      <div className="relative">
        <div className="parallax-item">
          <Banner />
        </div>

        <div className="w-4/5 mx-auto mt-20">
          <FeaturedRooms />
        </div>

        <div className="w-4/5 mx-auto mt-20 ">
          <ExclusiveOffers />
        </div>

        <div className="w-4/5 mx-auto mt-20">
          <Testimonials />
        </div>
      </div>
    </main>
  );
};

export default Home;
