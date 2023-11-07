const Review = ({ data }) => {
    // console.log(Object.keys(review).join(','));
    const {_id,name,serviceName,date,review,ratting}=data
  return (
    <div className="card  bg-base-100 shadow-xl">
   
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-lg">Service Name : {serviceName}</p>
        <p><span className="text-2xl text-green-500">Review</span> : {review}</p>
        <p className="text-lg">Date : {date}</p>
        <p className="text-lg">Ratting : ({ratting}/5)</p>
      
      </div>
    </div>
  );
};

export default Review;
