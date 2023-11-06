import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useState } from "react";
import Swal from "sweetalert2";

const RoomDetails = () => {
  const [startDate, setStartDate] = useState(new Date());
  const room = useLoaderData();
  console.log(room);
  const container = document.createElement('div');
  container.innerHTML=`<div className="w-4/5  mx-auto">
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
</div>`

  const handleBooking = ()=>{
    Swal.fire({
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
      html:container
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Booked!",
          text: "Your Booking has been Done",
          icon: "success"
        });
      }
    });
  }
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
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          <div className="card-actions ">
            <button onClick={handleBooking} className="btn btn-success text-white">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
