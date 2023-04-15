import React from "react";
import FooterList from "./FooterList";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaGithubSquare,
} from "react-icons/fa";

const FooterLayer = () => {
  const footerList = [
    {
      titleList: "Solution",
      list_1: "Analytics",
      list_2: "Marketing",
      list_3: "Commerces",
      list_4: "Insights",
    },
    {
      titleList: "Support",
      list_1: "Pricing",
      list_2: "Documentations",
      list_3: "Guides",
      list_4: "API Status",
    },
    {
      titleList: "Solution",
      list_1: "Analytics",
      list_2: "Marketing",
      list_3: "Commerces",
      list_4: "Insights",
    },
    {
      titleList: "Solution",
      list_1: "Analytics",
      list_2: "Marketing",
      list_3: "Commerces",
      list_4: "Insights",
    },
  ];

  return (
    <div className="text-white">
      <div className="container grid justify-center lg:grid-cols-2 lg:justify-between">
        <div className="text-center md:text-left lg:w-[420px]">
          <h1 className="logo-app">React.</h1>
          <p className="text-sm text-gray-400 py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            iure obcaecati omnis et doloremque quis odio amet non autem velit!
          </p>
          <div className="flex justify-center md:justify-normal space-x-16 py-5">
            <a href="#">
              <FaFacebookSquare size={30} />
            </a>
            <a href="#">
              <FaTwitterSquare size={30} />
            </a>
            <a href="#">
              <FaInstagram size={30} />
            </a>
            <a href="#">
              <FaGithubSquare size={30} />
            </a>
          </div>
        </div>
        <div className="grid justify-center py-5 md:grid-cols-2 md:justify-start lg:grid-cols-4 lg:justify-between">
          {footerList.map((data) => (
            <FooterList
              titleList={data.titleList}
              list_1={data.list_1}
              list_2={data.list_2}
              list_3={data.list_3}
              list_4={data.list_4}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col-reverse text-center py-5 container border-t border-slate-500 text-slate-500 md:flex-row md:items-center md:justify-between">
        <div className="py-3">React@2023 All right reserved</div>
        <div>Have a nice day</div>
      </div>
    </div>
  );
};

export default FooterLayer;
