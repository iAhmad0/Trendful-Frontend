import { BsFillArchiveFill } from 'react-icons/bs'
import { FaUserEdit, FaStreetView } from 'react-icons/fa'
import { IoChatbubbleEllipses } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function AdminSideBar() {
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
        <Link to="/admin/products">
          <li className="p-[20px] text-[18px] hover:cursor-pointer hover:bg-[#F39E31]">
            <a href="" className="text-no-underline text-white flex">
              <BsFillArchiveFill className="mr-[5px] align-middle leading-3 text-[20px]" />{' '}
              Products
            </a>
          </li>
        </Link>
        <Link to="/admin/chat">
          <li className="p-[20px] text-[18px] hover:cursor-pointer hover:bg-[#F39E31]">
            <a href="" className="text-no-underline text-white flex">
              <IoChatbubbleEllipses className="mr-[5px] align-middle leading-3 text-[20px]" />{' '}
              Customer Chat
            </a>
          </li>
        </Link>
        <Link to="/admin/customerAccount">
          <li className="p-[20px] text-[18px] hover:cursor-pointer hover:bg-[#F39E31]">
            <a href="" className="text-no-underline text-white flex">
              <FaUserEdit className="mr-[5px] align-middle leading-3 text-[20px]" />{' '}
              Customer Account
            </a>
          </li>
        </Link>
        <Link to="/admin/sellerAccount">
          <li className="p-[20px] text-[18px] hover:cursor-pointer hover:bg-[#F39E31]">
            <a href="" className="text-no-underline text-white flex">
              <FaStreetView className="mr-[5px] align-middle leading-3 text-[20px]" />{' '}
              Sellers Account
            </a>
          </li>
        </Link>
      </ul>
    </aside>
  )
}
export default AdminSideBar
