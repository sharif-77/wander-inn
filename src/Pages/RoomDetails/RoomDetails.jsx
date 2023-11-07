import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./../../AuthProvider/AuthProvider";
import axios from "axios";
import Review from "../../componenst/Review/Review";

const RoomDetails = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const room = useLoaderData();
  const {
    _id,
    name,
    type,
    price,
    description,
    capacity,
    roomSize,
    image,
    availability,
    review,
  } = room;
  const email = user?.email;
  const status='booked'
  const forSendData = {
    name,
    type,
    price,
    description,
    capacity,
    roomSize,
    image,
    availability,
    startDate,
    email,
    status
  };

  const container = document.createElement("div");
  container.innerHTML = `<div className="w-4/5  mx-auto">
  <div className="card  bg-base-100 shadow-xl">
    <figure>
      <img
        className="w-full  "
        src=${room.image}
        alt="Shoes"
      />
    </figure>
      <br/>
    <div className="p-2 space-y-2 mt-5">
      <h2 className="card-title">${room.name}</h2>
      <p className="text-xl">${room.description}</p>
      <p className="capitalize text-xl"> RoomSize : ${room.roomSize} Sq.Ft</p>
      <p className="text-xl  capitalize"> price : $${room.price}</p>
      <p className="text-xl  capitalize">Reserve Date : ${startDate}</p>
    </div>
  </div>
</div>`;

  const handleBooking = () => {
    if (!availability) {
      return
    }
    Swal.fire({
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
      html: container,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:5000/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(forSendData),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));

        const afterBooking = availability - 1;
        const available = { availability: afterBooking };

        fetch(`http://localhost:5000/rooms/${_id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(available),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((res) => console.log(res));

        Swal.fire({
          title: "Booked!",
          text: "Your Booking has been Done",
          icon: "success",
        });
      }
    });
  };
  const [data,setData]=useState([])

  useEffect(()=>{
    axios.get(`http://localhost:5000/reviews?serviceName=${name}`,{withCredentials:true})
    .then(res=>{
      setData(res.data) 
      console.log(res);
    })
},[name])
  return (
    <main className="w-4/5  mx-auto">
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="w-full  " src={room.image} alt="Shoes" />
        </figure>
        <div className="p-2 space-y-2">
          <h2 className="card-title">{room.name}</h2>
          <p className=" text-xl">Type : {room.type}</p>
          <p className="text-xl">{room.description}</p>
          <p className="capitalize text-xl"> capacity : {room.capacity}</p>
          <p className="capitalize text-xl">
            {" "}
            roomSize : {room.roomSize} Sq.Ft
          </p>
          <p className="text-xl  capitalize"> price : ${room.price}</p>
          <p className="text-xl capitalize ">
            {" "}
            availability : {room.availability}
          </p>
         
          <input
            type="date"
            name=""
            onChange={(e) => setStartDate(e.target.value)}
            id=""
          />

          <div className="card-actions  ">
            <button
              onClick={handleBooking}
              className={`${
                availability == 0
                  ? `pointer-events-none btn btn-success text-white`
                  : `btn btn-success text-white`
              }`}
            >
              {availability?'Book Now':'Room Unavailable'}
            </button>
          </div>
        </div>
      </div>

      <div className="my-20" >
        <p className="text-center text-3xl uppercase font-bold">Review Of This Room</p>
       
       <div className="my-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
       {
          data.map(review=><Review key={review._id} data={review}  />)
        }
       </div>
      </div>


    </main>
  );
};

export default RoomDetails;
