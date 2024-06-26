import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

function Header() {
  return (
    <header className="h-[60px] flex items-center justify-between px-[30px] shadow-md text-[orange]">
      <div className="hidden">
        <BsJustify className="mr-5 align-middle leading-3 text-20" />
      </div>
      <div>
        <BsSearch className="mr-[5px] align-middle leading-3 text-[20px]" />
      </div>
      <div className="flex">
        <BsFillBellFill className="mr-[5px] align-middle leading-3 text-[20px]" />
        <BsFillEnvelopeFill className="mr-[5px] align-middle leading-3 text-[20px]" />
        <BsPersonCircle className="mr-[5px] align-middle leading-3 text-[20px]" />
      </div>
    </header>
  );
}
export default Header;
