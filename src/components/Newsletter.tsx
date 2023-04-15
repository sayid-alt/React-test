import React from "react";

const Newsletter = () => {
  return (
    <div className="container text-white">
      <div className="grid md:grid-cols-3 items-center">
        <div className="md:col-span-2">
          <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="block text-gray-500">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div>
          <div className="lg:flex lg:space-x-3">
            <input
              className="p-2 w-full mx-auto mt-5 rounded-md text-center text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="btn mt-5 w-full mx-auto block  md:w-full lg:w-64">
              Notify me
            </button>
          </div>
          <p className="mt-5 text-gray-500 md:w-full">
            We care about protection of your data. review our{" "}
            <a className="text-[#00df9a]" href="#">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
