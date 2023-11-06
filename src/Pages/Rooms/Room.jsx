import { Link } from "react-router-dom";

const Room = ({ room }) => {
  return (
    <div>
      <Link to={`/roomDetails/${room._id}`}>
      
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full min-h-[300px] max-h-[300px] "
              src={room.image}
              alt="Shoes"
            />
          </figure>
          <div className="p-2 space-y-2">
            <h2 className="card-title">{room.name}</h2>

            <p className="text-2xl "> price: ${room.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Room;
