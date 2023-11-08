import 'aos/dist/aos.css'
const ExclusiveOffer = ({offer}) => {
    return(
   <div data-aos="fade-right">
         <div className="card  bg-base-100 shadow-xl" >
        <figure><img className="w-full min-h-[300px] max-h-[300px] " src={offer.image} alt="Shoes" /></figure>
        <div className="p-2 space-y-2">
          <h2 className="card-title">{offer.title}</h2>
          <p>{offer.description}</p>
          <p className="text-black  text-xl">{offer.offer}</p>
          <p className="text-black  text-2xl"> Price: ${offer.price}</p>
          <div className="card-actions ">
            <button className="btn btn-success text-white">Book Now</button>
          </div>
        </div>
      </div>
   </div>
    )}
export default ExclusiveOffer;