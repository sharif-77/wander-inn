const Testimonial = ({ review }) => {
  return (
    <div data-aos="fade-down">
      <div className="card  bg-base-100 shadow-xl">
        <figure className="py-5">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.image}  />
            </div>
          </div>
        </figure>
        <div className="p-2 space-y-2">
          <h2 className="card-title text-xl">{review.name}</h2>
          <p></p>
          <p className="text-black   min-h-[100px]">{review.review}</p>

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
    </div>
  );
};

export default Testimonial;
