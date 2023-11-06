import {Helmet} from "react-helmet";
import FeaturedRooms from "../../componenst/FeaturedRooms/FeaturedRooms";

const Rooms = () => {
    return(
        <div>
            <Helmet><title>Rooms</title></Helmet>

             <main className="w-4/5 mx-auto">
             <FeaturedRooms/>
             </main>
        </div>
    )}
export default Rooms;