import { Helmet } from "react-helmet";
import Banner from "../../componenst/Banner/Banner";
import ExclusiveOffers from "../../componenst/ExclusiveOffers/ExclusiveOffers";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>WanderInn</title>
      </Helmet>

      <div>
        <Banner/>
      </div>
      <div className="w-4/5 mx-auto mt-20">
        <ExclusiveOffers/>
      </div>




    </div>
  );
};
export default Home;
