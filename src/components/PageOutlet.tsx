import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { useAppDispatch, useAppSelector } from "../app/store";
import { getResponsive, setResponsive } from "../app/app/appSlice";
import {RxCross2} from 'react-icons/rx'
const PageOutlet = () => {
  const isResponsive = useAppSelector(getResponsive);
  console.log(isResponsive);
  const dispatch = useAppDispatch()
  const handleClick = (e:React.MouseEvent<SVGAElement>)=>{
    dispatch(setResponsive())
}
  return (
    <div className="w-full min-h-screen flex">
      <aside
        className={` ${
          !isResponsive ? "-translate-x-56" : "translate-x-0"
        } absolute w-56 -z-1 bg-tertiary z-9 shadow-lg ls:sticky ls:block ls:translate-x-0 ls:w-1/5 top-0 left-0 z-5 transition-all duration-150`}
      >
        <ul className="w-full mt-10 ls:mt-14 list-none sticky top-16 left-0 flex flex-col items-start gap-5 pt-20 pl-6 shadow-lg h-screen">
            <RxCross2 className="absolute right-3 top-5 text-secondary ls:hidden" size={24} onClick={handleClick} />
          <Link
            className="w-[90%] bg-secondary text-tertiary font-semibold text-md ls:text-lg p-2 rounded flex justify-around items-center"
            to="/"
          >
            <FaUserCircle className="text-tertiary" size={20} />
            <li>Contact Page</li>
          </Link>
          <Link
            className="w-[90%] bg-secondary text-tertiary font-semibold text-md ls:text-lg p-2 rounded flex items-center justify-around"
            to="/map"
          >
            <SiGooglemaps className="text-tertiary" size={20} />
            <li>Map & Charts</li>
          </Link>
        </ul>
      </aside>
      <div className="w-full ls:w-4/5 bg-tertiary">
        <Outlet />
      </div>
    </div>
  );
};

export default PageOutlet;
