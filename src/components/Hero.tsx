import React, { Fragment } from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <Fragment>
      <div className="text-white max-w-[800px] p-10 mx-auto mt-[-96px] text-center h-screen flex flex-col items-center justify-center">
        <p className="text-[#00df9a] font-medium">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="font-bold md:text-7xl sm:text-6xl text-4xl p-2">
          Grow with data.
        </h1>
        <div className="font-bold md:text-lg sm:text-md pt-5">
          Fast, flexible financing for{" "}
          <Typed
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="font-bold text-gray-600 md:text-lg text-sm">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platform
        </p>
        <button className="bg-[#00df9a] p-2 w-[200px] rounded-md text-black duration-200 ease-in-out font-medium mt-10 hover:bg-[#009566]">
          Get Started
        </button>
      </div>
    </Fragment>
  );
};

export default Hero;
