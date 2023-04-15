import React from "react";

interface Props {
  image: string;
  userType: string;
  price: string;
  feature_1: string;
  feature_2: string;
  feature_3: string;
}

const Card = ({
  image,
  userType,
  price,
  feature_1,
  feature_2,
  feature_3,
}: Props) => {
  return (
    <div className="shadow-xl rounded-xl p-16 hover:scale-105 duration-300">
      <img
        className="w-20 mx-auto mt-[-3.5rem] bg-white pb-10"
        src={image}
        alt="/"
      />
      <div className="font-bold text-center space-y-4">
        <h2 className="text-2xl">{userType}</h2>
        <h1 className="text-3xl">${price}</h1>
      </div>
      <div className="py-10 text-center">
        <p className="py-2 border-b">{feature_1}</p>
        <p className="py-2 border-b">{feature_2}</p>
        <p className="py-2 border-b">{feature_3}</p>
      </div>
      <button className="btn mx-auto block">Sign up Now</button>
    </div>
  );
};

export default Card;
