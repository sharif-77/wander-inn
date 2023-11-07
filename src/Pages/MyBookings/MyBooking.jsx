
const MyBooking = ({room}) => {
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure><img className="w-full min-h-[300px] max-h-[300px] " src={room.image} alt="Shoes" /></figure>
        <div className="p-2 space-y-2">
          <h2 className="card-title">{room.name}</h2>
          <div className=" flex justify-between ">
            <button className="btn btn-success text-white">Cancel</button>
            <button className="btn btn-success text-white">Delete</button>
          </div>
        </div>
      </div>
    );
};

export default MyBooking;