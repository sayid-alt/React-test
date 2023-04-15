import React from "react";

interface Props {
  titleList: string;
  list_1: string;
  list_2: string;
  list_3: string;
  list_4: string;
}

const FooterList = ({ titleList, list_1, list_2, list_3, list_4 }: Props) => {
  return (
    <div className="py-5 text-center md:text-left">
      <h5 className="font-bold">{titleList}</h5>
      <ul className="text-gray-400 py-1">
        <li className="py-1">
          <a className="duration-300 ease-in-out hover:text-gray-200" href="#">
            {list_1}
          </a>
        </li>
        <li className="py-1">
          <a className="duration-300 ease-in-out hover:text-gray-200" href="#">
            {list_2}
          </a>
        </li>
        <li className="py-1">
          <a className="duration-300 ease-in-out hover:text-gray-200" href="#">
            {list_3}
          </a>
        </li>
        <li className="py-1">
          <a className="duration-300 ease-in-out hover:text-gray-200" href="#">
            {list_4}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterList;
