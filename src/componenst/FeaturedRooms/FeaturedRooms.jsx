import axios from 'axios';
import  { useEffect, useState } from 'react';
import FeaturedRoom from './FeaturedRoom';

const FeaturedRooms = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/rooms')
        .then(res=>setData(res.data))
    },[])
    return (
        <div>
            <div className="mb-10 "><p className="text-center text-5xl font-bold capitalize"><span>our Featured</span> <span className="text-green-500">Rooms</span></p></div>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    data.map(room=><FeaturedRoom key={room._id} room={room} />)
                }

             </div>


        </div>
    );
};

export default FeaturedRooms;