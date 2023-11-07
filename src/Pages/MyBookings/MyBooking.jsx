import { useState } from "react";
import toast from "react-hot-toast";

const MyBooking = ({room}) => {
  const {_id,startDate,status,availability}=room
  const makeDateFormat=new Date(startDate)
  const currentDate=new Date()
  const timeDifference = makeDateFormat.getTime() - currentDate.getTime();
const dayDifference = timeDifference / (1000 * 3600 * 24);
const dayInSimple =Math.floor(dayDifference)

  const [currentStatus,setCurrentStatus]=useState(status)
  const [date,setDate]=useState(startDate)

  const handleCancel = ()=>{
    if (dayInSimple < 1) {
      toast.error('You cannot cancel')
      return
    }

const status = { status: 'canceled' };
fetch(`http://localhost:5000/status/${_id}`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(status),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    if (data.modifiedCount) {
      toast.success('Cancel SuccessFull')
      
    }
  })
  .catch((res) => console.log(res));
   
  }

  const handleDelete =()=>{
    fetch(`http://localhost:5000/bookings/${_id}`, {
          method: "DELETE",
          
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.deletedCount) {
            toast.success('Delete successFull')
            
          }
        })
        .catch((res) => console.log(res));
  }
  const handleBookingDate = ()=>{
    const updatedDate ={date}
    fetch(`http://localhost:5000/updateDate/${_id}`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(updatedDate),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    if (data.modifiedCount) {
      toast.success('Date Updated')
      
    }
  })
  .catch((res) => console.log(res));
  }



    return (
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-10 border-emerald-500 border-2 p-5 rounded-md">

          <div className="card  bg-base-100 shadow-xl ">
        <figure><img className="w-full min-h-[300px] max-h-[300px] " src={room.image} alt="Shoes" /></figure>
        <div className="p-2 space-y-2">
          <h2 className="card-title">{room.name}</h2>
          <h2 className="card-title ">Status : {currentStatus}</h2>
          <div>
            <p className="text-lg">Update Your Booking Date</p>
          <input onChange={(e) => setDate(e.target.value)} defaultValue={startDate} type="date" name="" id="" />
          </div>
          <div className=" flex gap-2 ">

            <button onClick={handleBookingDate} className="btn btn-success text-white">Update Booking Date</button>
            <button onClick={handleCancel}   className="btn btn-success text-white">Cancel</button>
            <button onClick={handleDelete} className="btn btn-success text-white">Delete</button>
          </div>
        </div>
      </div>
      {/* card end */}

      <div className="">
      <form  className=" space-y-5">
        <p className="text-3xl text-center">Give You Feedback</p>
          <div className="flex flex-col gap-2">
            <label htmlFor="Image"> Enter Your Image</label>
            <input
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type="text"
              name="Review"
              id="Image"
              placeholder="Enter Your Image Url"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Review"> Enter Your Review</label>
            <input
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type="email"
              name="Review"
              id="Review"
              placeholder="Enter Your Review"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="Ratting">Give Ratting</label>
            <input
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type="number"
              name="Ratting"
              id="Ratting"
              placeholder="Give Ratting Out of 5"
              max={5}
            />
          </div>
          
          <div className="flex flex-col  ">
            <button
              className="bg-[#14c898f3] py-2 px-4 mt-5 rounded-md  font-bold"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>

      </div>

      </main>
    );
};

export default MyBooking;