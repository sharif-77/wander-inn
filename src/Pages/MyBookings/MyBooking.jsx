import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "./../../AuthProvider/AuthProvider";

const MyBooking = ({ room }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { _id, name, startDate, status, availability } = room;
  const makeDateFormat = new Date(startDate);
  const currentDate = new Date();
  const timeDifference = makeDateFormat.getTime() - currentDate.getTime();
  const dayDifference = timeDifference / (1000 * 3600 * 24);
  const dayInSimple = Math.floor(dayDifference);

  const [currentStatus, setCurrentStatus] = useState(status);
  const [date, setDate] = useState(startDate);

  const handleCancel = () => {
    if (dayInSimple < 1) {
      toast.error("You cannot cancel");
      return;
    }

    const status = { status: "canceled" };
    fetch(`https://wander-inn-server.vercel.app/status/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("Cancel SuccessFull");
        }
      })
      .catch((res) => console.log(res));
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://wander-inn-server.vercel.app/bookings/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              toast.success("Delete successFull");
              window.location.reload();
            }
          })
          .catch((res) => console.log(res));
      }
    });
  };

  const handleBookingDate = () => {
    const updatedDate = { date };
    fetch(`https://wander-inn-server.vercel.app/updateDate/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedDate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("Date Updated");
        }
      })
      .catch((res) => console.log(res));
  };

  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const serviceName = form.serviceName.value;
    const date = form.date.value;
    const review = form.review.value;
    const ratting = form.ratting.value;
    const dataForSend = {
      name,
      serviceName,
      date,
      review,
      ratting,
    };
    fetch("https://wander-inn-server.vercel.app/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataForSend),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review Success");
        }
      });
  };

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-10 border-emerald-500 border-2 p-5 rounded-md">
      <div className="card  bg-base-100 shadow-xl ">
        <figure>
          <img
            className="w-full min-h-[300px] max-h-[300px] "
            src={room.image}
            alt="Shoes"
          />
        </figure>
        <div className="p-2 space-y-2">
          <h2 className="card-title">{room.name}</h2>
          <h2 className="card-title ">Status : {currentStatus}</h2>
          <div>
            <p className="text-lg">Update Your Booking Date</p>
            <input
              onChange={(e) => setDate(e.target.value)}
              defaultValue={startDate}
              type="date"
              name=""
              id=""
            />
          </div>
          <div className=" flex flex-col md:flex-row gap-2 ">
            <button
              onClick={handleBookingDate}
              className="btn btn-success text-white"
            >
              Update Booking Date
            </button>
            <button
              onClick={handleCancel}
              className="btn btn-success text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="btn btn-success text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      {/* card end */}

      <div className="">
        <form onSubmit={handleReview} className=" space-y-3">
          <p className="text-3xl text-center">Give You Review</p>
          <div className="flex flex-col gap-2">
            <label htmlFor="name"> Enter Your Name</label>
            <input
              defaultValue={user?.displayName}
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="serviceName"> Service Name</label>
            <input
              defaultValue={name}
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type="text"
              name="serviceName"
              id="serviceName"
              placeholder="Enter Your Service Name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="date">Time stamp</label>
            <input
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type="date"
              name="date"
              id="date"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="review"> Enter Your Review</label>
            <input
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type="text"
              name="review"
              id="review"
              placeholder="Enter Your Review"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="ratting">Give Ratting</label>
            <input
              className="bg-[#F3F3F3] text-black py-2 px-4 rounded-md"
              type="number"
              name="ratting"
              id="ratting"
              placeholder="Give Ratting Out of 5"
              max={5}
            />
          </div>

          <div className="flex flex-col   ">
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
