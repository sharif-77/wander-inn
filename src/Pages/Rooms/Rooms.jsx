import { Helmet } from "react-helmet";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Room from "./Room";

const Rooms = () => {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState();
  const handleOrder = (e) => {
    console.log(e.target.value);
    const order = e.target.value;
    setOrder(order);
  };
  useEffect(() => {
    axios
      .get(`https://wander-inn-server.vercel.app/rooms?order=${order}`)
      .then((res) => setData(res.data));
  }, [order]);
  return (
    <div className="my-10">
      <Helmet>
        <title>Rooms</title>
      </Helmet>

      <main className="w-4/5 mx-auto">
        <div className="my-10 ">
          <select
            className="font-bold bg-green-500 px-5 py-2 rounded-md  text-xl text-white"
            onChange={handleOrder}
            name="select"
            id=""
          >
            <option disabled selected>
              Sort By Price
            </option>
            <option value="asc">Lower To Higher</option>
            <option value="desc">Higher To Lower</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {data.map((room) => (
            <Room key={room._id} room={room} />
          ))}
        </div>
      </main>
    </div>
  );
};
export default Rooms;
