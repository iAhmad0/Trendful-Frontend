import { IoIosLogOut } from 'react-icons/io'
import { BsFillArchiveFill, BsListCheck, BsFillGearFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function logOut() {
  localStorage.removeItem('sellerToken')
  localStorage.removeItem('cartItems')
  localStorage.removeItem('cartCounter')
  localStorage.removeItem('itemsQuantities')
}

function SideBar() {
  return (
    <aside className="min-h-screen bg-[#3E64DA] w-[20%] transition-all duration-500">
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
        <Link to="/seller/products">
          <li className="p-[20px] text-[15px]  hover:cursor-pointer hover:bg-[#F39E31]">
            <div className="text-no-underline text-white flex">
              <BsFillArchiveFill className="mr-[5px] align-middle leading-3 text-[20px]" />{' '}
              Products
            </div>
          </li>
        </Link>
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
