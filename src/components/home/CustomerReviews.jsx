const CustomerReviews = () => {
  return (
    <section className=" flex flex-col p-10 md:px-40 h-[400px] py-10 mt-20">
      <h1 className="text-2xl text-center mb-10">Customer Reviews</h1>
      <article className="md:w-[400px] md:h-[350px] h-auto w-auto px-10 py-4 flex flex-col justify-center items-center gap-4 border   ">
        <img
          src="https://placehold.co/100x100"
          alt="Customer 1"
          className="w-20 h-20 rounded-full"
        />
        <div className="text-center font-semibold ">
          <h2>John Doe</h2>
          <p>"Great experience! Highly recommend."</p>
        </div>
      </article>
    </section>
  );
};

export default CustomerReviews;
