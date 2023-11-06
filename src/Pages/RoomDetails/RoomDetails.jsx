import { useLoaderData } from "react-router-dom";

const RoomDetails = () => {
  const room = useLoaderData();
  console.log(room);
  return (
    <div className="w-4/5  mx-auto">
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full  "
            src={room.image}
            alt="Shoes"
          />
        </figure>
        <div className="p-2 space-y-2">
          <h2 className="card-title">{room.name}</h2>
          <p className=" text-xl">Type : {room.type}</p>
          <p className="text-xl">{room.description}</p>
          <p className="capitalize text-xl"> capacity : {room.capacity}</p>
          <p className="capitalize text-xl"> roomSize : {room.roomSize} Sq.Ft</p>
          <p className="text-xl  capitalize"> price : ${room.price}</p>
          <p className="text-xl capitalize "> availability : {room.availability}</p>
          <div className="card-actions ">
            <button className="btn btn-success text-white">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
