import axios from "axios"
import { useEffect, useState } from "react"
import Testimonial from "./Testimonial"

const Testimonials = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/testimonials')
        .then(res=>setData(res.data))

    },[])
    return(
        <div>
             <div className="mb-10 "><p className="text-center text-5xl font-bold capitalize"> <span className="text-green-500">Users</span> <span>Testimonial</span> </p></div>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {data.map(review=><Testimonial key={review._id} review={review} />)}
             </div>
        </div>
    )}
export default Testimonials;