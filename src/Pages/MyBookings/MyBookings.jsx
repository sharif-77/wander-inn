import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {Helmet} from "react-helmet";
import { AuthContext } from './../../AuthProvider/AuthProvider';
import MyBooking from "./MyBooking";

const MyBookings = () => {
    const {user}=useContext(AuthContext)
    const email=user?.email;
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/bookings?email=${email}`,{withCredentials:true})
        .then(res=>setData(res.data))
    },[email])
    return(
        <div className="w-4/5 mx-auto mt-20">
            <Helmet><title>My-Bookings</title></Helmet>
             <main>
             <div className="grid grid-cols-1  gap-5">
                {
                    data.map(room=><MyBooking key={room._id} room={room} />)
                }

             </div>
            </main>
        </div>
    )}
export default MyBookings;