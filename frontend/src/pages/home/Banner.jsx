import React from 'react';
import bannerImg from '../../assets/banner.png';
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-12 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={bannerImg} alt="Banner" />
      </div>

      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5x text-2xl font-medium mb-7">
          New Realease This Week
        </h1>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis
          natus et iure eos iusto. Numquam adipisci aliquid minima nesciunt
          voluptatum? Quia vero corporis earum id veniam neque eveniet
          temporibus.
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
};

export default Banner;
