import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytical = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="grid max-w-7xl mx-auto md:grid-cols-2 items-center">
        <img className="p-5" src={Laptop} alt="/" />
        <div>
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="font-bold text-2xl">Manage Data Analytics Central</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quo
            voluptate inventore laudantium dignissimos officiis iure!
            Reiciendis, nisi beatae consequatur suscipit, ullam officia sequi
            quod non facere, aliquid earum veniam.
          </p>
          <button className="btn-reverse mt-8 max-w-sm mx-auto block md:inline-block">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytical;
