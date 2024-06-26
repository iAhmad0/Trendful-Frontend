import React from 'react'
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from 'react-icons/bs'
import { FaUserEdit, FaStreetView } from 'react-icons/fa'
import { IoChatbubbleEllipses } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="min-h-full bg-[#3E64DA] w-[20%] transition-all duration-500">
      <div className="flex justify-between items-center px-[30px] py-[15px] mb-[30px]">
        <div className="flex mt-[15px] text-2xl font-bold text-white">
          <BsCart3 className=" align-middle leading-3 text-[26px] mr-[5px]" />{' '}
          SHOP
        </div>
      </div>
      <ul className="p-0 list-none">
        <Link to="/">
          <li className="p-[20px] text-[18px] hover:cursor-pointer hover:bg-[#F39E31]">
            <a href="" className="text-no-underline text-white flex">
              <BsGrid1X2Fill className="mr-[5px] align-middle leading-3 text-[20px]" />{' '}
              Dashboard
            </a>
          </li>
        </Link>
        <Link to="/Products">
          <li className="p-[20px] text-[18px] hover:cursor-pointer hover:bg-[#F39E31]">
            <a href="" className="text-no-underline text-white flex">
              <BsFillArchiveFill className="mr-[5px] align-middle leading-3 text-[20px]" />{' '}
              Products
            </a>
          </li>
        </Link>
        {/* <li className="p-[20px] text-[18px] hover:cursor-pointer hover:bg-[#F39E31]">
          <a href="" className="text-no-underline text-white flex">
            <BsFillGrid3X3GapFill className="mr-[5px] align-middle leading-3 text-[20px]" />{' '}
            Categories
          </a>
        </li> */}
        {/* <Link to="/Inventory">
          <li className="p-[20px] text-[18px] hover:cursor-pointer hover:bg-[#F39E31]">
            <a href="" className="text-no-underline text-white flex">
              <BsListCheck className="mr-[5px] align-middle leading-3 text-[20px]" />{' '}
              Inventory
            </a>
          </li>
        </Link> */}
        <Link to="/Chat">
          <li className="p-[20px] text-[18px] hover:cursor-pointer hover:bg-[#F39E31]">
            <a href="" className="text-no-underline text-white flex">
              <IoChatbubbleEllipses className="mr-[5px] align-middle leading-3 text-[20px]" />{' '}
              Customer Chat
            </a>
          </li>
        </Link>
        <Link to="/EditAndDelete">
          <li className="p-[20px] text-[18px] hover:cursor-pointer hover:bg-[#F39E31]">
            <a href="" className="text-no-underline text-white flex">
              <FaUserEdit className="mr-[5px] align-middle leading-3 text-[20px]" />{' '}
              Customer Account
            </a>
          </li>
        </Link>
        <Link to="/Review">
          <li className="p-[20px] text-[18px] hover:cursor-pointer hover:bg-[#F39E31]">
            <a href="" className="text-no-underline text-white flex">
              <FaStreetView className="mr-[5px] align-middle leading-3 text-[20px]" />{' '}
              Reviews
            </a>
          </li>
        </Link>
      </ul>
    </aside>
  )
}
export default Sidebar
