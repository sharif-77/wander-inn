const Testimonial = ({ review }) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-full min-h-[300px] max-h-[300px] "
          src={review.image}
          alt="Shoes"
        />
      </figure>
      <div className="p-2 space-y-2">
        <h2 className="card-title text-xl">{review.name}</h2>
        <p></p>
        <p className="text-black   min-h-[100px]">
          {review.review}
        </p>

        <div className="text-center">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
