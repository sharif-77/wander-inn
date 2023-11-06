
const FeaturedRoom = ({room}) => {
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure><img className="w-full min-h-[300px] max-h-[300px] " src={room.image} alt="Shoes" /></figure>
        <div className="p-2 space-y-2">
          <h2 className="card-title">{room.name}</h2>
          <p className=" text-xl">Type : {room.type}</p>
          <p className="text-xl">{room.description}</p>
          <p className="capitalize" > capacity: {room.capacity}</p>
          <p className="capitalize"> roomSize: {room.roomSize} Sq.Ft</p>
          <p className="text-2xl "> price: ${room.price}</p>
          <div className="card-actions ">
            <button className="btn btn-success text-white">Book Now</button>
          </div>
        </div>
      </div>
    );
};

export default FeaturedRoom;