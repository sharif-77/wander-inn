import { useEffect, useState } from "react";
import axios from "axios";
import ExclusiveOffer from "./ExclusiveOffer";


const ExclusiveOffers = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/offers')
        .then(res=>setData(res.data))

    },[])
    return(
        <div>
            <div className="mb-10 "><p className="text-center text-5xl font-bold capitalize">Exclusive Offers</p></div>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    data.map(offer=><ExclusiveOffer key={offer._id} offer={offer} />)
                }

             </div>


        </div>
    )}
export default ExclusiveOffers;