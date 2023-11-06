import { Helmet } from "react-helmet";
import Banner from "../../componenst/Banner/Banner";
import ExclusiveOffers from "../../componenst/ExclusiveOffers/ExclusiveOffers";
import Testimonials from "../../componenst/Testimonials/Testimonials";
import { Parallax } from "react-scroll-parallax";
import FeaturedRooms from "../../componenst/FeaturedRooms/FeaturedRooms";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>WanderInn</title>
      </Helmet>

      {/* <Parallax speed={-5}>
      <div className="slow" />
    </Parallax> */}

        <div>
          <Banner />
        </div>

        <div className="w-4/5 mx-auto mt-20">
        <FeaturedRooms />
      </div>

      <div className="w-4/5 mx-auto mt-20">
        <ExclusiveOffers />
      </div>

     
      <div className="w-4/5 mx-auto mt-20">
        <Testimonials />
      </div>
      
    </div>
  );
};
export default Home;
