import React from 'react'
import { IoIosLogOut } from 'react-icons/io'
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function logOut() {
  localStorage.removeItem('sellerToken')
}

function SideBar() {
  return (
    <aside className="min-h-full bg-[#3E64DA] w-[20%] transition-all duration-500">
      <div className="flex justify-center items-center py-[15px]">
        <div className="flex mt-[15px] text-2xl">
          <img
            src="/public/images/logo-nobg-white.png"
            alt=""
            className="w-[150px]"
          />
        </div>
      </div>
      <ul className="p-0 list-none">
        {/* <Link to="/seller">
          <li className="p-[20px] text-[18px] hover:cursor-pointer hover:bg-[#F39E31]">
            <div className="text-no-underline text-white flex">
              <BsGrid1X2Fill className="mr-[5px] align-middle leading-3 text-[20px]" />{" "}
              Dashboard
            </div>
          </li>
        </Link> */}
        <Link to="/seller/products">
          <li className="p-[20px] text-[15px]  hover:cursor-pointer hover:bg-[#F39E31]">
            <div className="text-no-underline text-white flex">
              <BsFillArchiveFill className="mr-[5px] align-middle leading-3 text-[20px]" />{' '}
              Products
            </div>
          </li>
        </Link>
        {/* <li className="p-[20px] text-[18px] hover:cursor-pointer hover:bg-[#F39E31]">
          <div className="text-no-underline text-white flex">
            <BsFillGrid3X3GapFill className="mr-[5px] align-middle leading-3 text-[20px]" />{" "}
            Categories
          </div>
        </li> */}
        <Link to="/seller/inventory">
          <li className="p-[20px] text-[15px]  hover:cursor-pointer hover:bg-[#F39E31]">
            <div className="text-no-underline text-white flex">
              <BsListCheck className="mr-[5px] align-middle leading-3 text-[20px]" />{' '}
              Inventory
            </div>
          </li>
        </Link>
        <Link to="/seller/settings">
          <li className="p-[20px] text-[15px]  hover:cursor-pointer hover:bg-[#F39E31]">
            <div className="text-no-underline text-white flex">
              <BsFillGearFill className="mr-[5px] align-middle leading-3 text-[20px]" />{' '}
              Settings
            </div>
          </li>
        </Link>
        <Link to="/seller/login" onClick={logOut}>
          <li className="p-[20px] text-[15px]  hover:cursor-pointer hover:bg-[#F39E31]">
            <div className="text-no-underline text-white flex items-center">
              <IoIosLogOut className="mr-[5px] align-middle leading-3 text-[20px]" />{' '}
              Sign Out
            </div>
          </li>
        </Link>
      </ul>
    </aside>
  )
}
export default SideBar
