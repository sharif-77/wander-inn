const ExclusiveOffer = ({offer}) => {
    return(
        <div className="card  bg-base-100 shadow-xl">
        <figure><img className="w-full min-h-[300px] max-h-[300px] " src={offer.image} alt="Shoes" /></figure>
        <div className="p-2 space-y-3">
          <h2 className="card-title">{offer.title}</h2>
          <p>{offer.description}</p>
          <div className="card-actions ">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    )}
export default ExclusiveOffer;