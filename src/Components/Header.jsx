import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useGlobalState } from '../globalStates/index.js'
import Category from './Category.jsx'

function logOut() {
  localStorage.removeItem('token')
  localStorage.removeItem('cartItems')
  localStorage.removeItem('cartCounter')
  localStorage.removeItem('itemsQuantities')
  localStorage.removeItem('toBuyItem')
  localStorage.removeItem('total')
}

function Header() {
  const [cartCounter] = useGlobalState('cartCounter')
  const [value, setValue] = useState(false)
  const [input, setInput] = useState(' ')
  const [name, setName] = useState('sign in')
  const [categories, setCategories] = useState([])

  async function check() {
    if (localStorage.getItem('token')) {
      try {
        const request = await axios.post(
          'http://localhost:3000/api/buyer/token',
          {
            token: localStorage.getItem('token'),
          }
        )
        setName(request.data.name)
      } catch (err) {
        localStorage.removeItem('token')
      }
    } else {
      localStorage.removeItem('token')
    }
  }

  async function getCategories() {
    try {
      const response = await axios.get('http://localhost:3000/api/categories')
      setCategories(response.data)
    } catch (error) {
      return []
    }
  }

  useEffect(() => {
    check()
  }, [])

  useEffect(() => {
    getCategories()
  }, [])

  function handleSearch() {
    window.location.href = 'http://localhost:5173/search/' + input
  }

  function showNav() {
    setValue(true)
    document.body.style.overflow = 'hidden'
  }

  function hidenav() {
    setValue(false)
    document.body.style.overflow = 'visible'
  }

  const navbar2 = [
    'Shop By Category',
    'Mobiles, Tablets & Accessories',
    'Computers & Office Supplies',
    "TV's & Electronics",
  ]

  const navbar4 = ['Help & Settings', 'Purchase History', 'Your Account']
  return (
    <header className="bg-[#3E64DA]">
      <div className="text-white w-full flex items-center justify-between pt-[5px] pb-[5px] pr-[20px] pl-[20px]">
        <div className=" rounded cursor-pointer p-2.5 pl-0 border border-transparent border-solid">
          <Link to="/">
            <img
              src="/images/logo-nobg-white.png"
              alt=""
              className="w-[100px] h-[60px] "
            />
          </Link>
        </div>

        <div className="flex rounded overflow-hidden">
          <input
            type="search"
            placeholder="Search by name ..."
            className="p-2.5 text-black w-[500px] outline-none"
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSearch}>
            <div className=" p-2.5 text-black bg-orange-300 hover:bg-[orangered] cursor-pointer">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </button>
        </div>

        <div className="flex justify-center items-center">
          <div className="sign p-2.5 pr-[15px] text-left rounded cursor-pointer relative border border-transparent border-solid ">
            <span className="block text-[10px] text-[#c7c3c7]">
              Hello, {name}
            </span>
            <span className="after:absolute after:content-[''] after:border-[4px] after:border-solid after:border-b-transparent after:border-l-transparent after:bottom-0 after:right-[-10px] after:border-r-transparent after:border-t-white  relative font-[700] text-[12px]">
              Account & list
            </span>
            <div className="bg-white absolute w-[400px] left-[-100px] rounded hidden list-lan after:left-[190px] z-20 after:content-[''] after:absolute after:border-[5px] after:border-solid after:border-l-transparent after:border-b-white after:top-[-9px] after:border-r-transparent after:border-t-transparent">
              <p className="text-center p-[10px] border-b-[#eee] border-solid border-b mr-[20px] ml-[20px]">
                <Link to="/login">
                  <button
                    onClick={logOut}
                    className="text-black bg-orange-400 pt-[5px] pb-[5px] pr-[70px] mr-auto ml-auto pl-[70px] block rounded text-[13px]"
                  >
                    {name === 'sign in' ? 'Sign In' : 'Log Out'}
                  </button>
                </Link>
                {name === 'sign in' ? (
                  <Link to="/login">
                    <span className="text-black text-[10px]">
                      New Customer?
                    </span>
                    <span className="text-blue-700 text-[10px] ml-1">
                      Start here.
                    </span>
                  </Link>
                ) : (
                  ''
                )}
              </p>
              <div className="text-black flex p-[20px]">
                <div className="flex-1 pl-[10px]">
                  <h1 className="font-bold mt-[5px] mb-[5px] cursor-text">
                    Your Account
                  </h1>
                  <Link to="/settings">
                    <span className="text-[13px]">Your Account</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded cursor-pointer pt-[20px] font-[700] Order border border-transparent border-solid ">
            Orders
          </div>
          <Link to="/cart">
            <div className="flex rounded p-2.5 cursor-pointer cart border border-transparent border-solid relative ">
              <span className="absolute w-[20px] h-[20px] rounded-full bg-red-500 flex justify-center items-center left-[40px] top-[0px]">
                {cartCounter}
              </span>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="w-[50px] h-[30px]"
              />
              <p className="text-[15px] pt-[10px]">Cart</p>
            </div>
          </Link>
        </div>
      </div>

      <Category categories={categories} showNav={showNav} />

      <FontAwesomeIcon
        icon={faXmark}
        onClick={hidenav}
        className={`absolute top-[10px] ${
          !value ? 'left-[-30px]' : 'left-[320px]'
        } duration-[0.3s] cursor-pointer h-[30px] text-white z-20`}
      />
      <nav
        className={`fixed  w-[300px] min-h-screen max-h-screen overflow-x-hidden bg-white z-20 top-0  duration-[0.3s] ${
          !value ? 'left-[-300px]' : 'left-[0px]'
        }`}
      >
        <Link to="/login">
          <div className=" bg-slate-800 text-white p-[20px] cursor-pointer">
            <FontAwesomeIcon icon={faUser} />
            <p className="inline-block ml-[5px]">Hello, {name}</p>
          </div>
        </Link>

        <ul className="text-left border-b border-[silver] border-solid">
          {navbar2.map((name, index) => {
            return (
              <li
                key={index}
                className={`${
                  index == 0
                    ? 'p-[10px] text-[#111] font-bold'
                    : 'cursor-pointer p-[10px] hover:bg-[#eee]'
                }`}
              >
                {name}
              </li>
            )
          })}
        </ul>

        <ul className="text-left border-b border-[silver] border-solid">
          {navbar4.map((name, index) => {
            return (
              <>
                {index !== 0 ? (
                  <Link to={`${index === 1 ? '/history' : '/settings'}`}>
                    {' '}
                    <li
                      key={index}
                      className={'cursor-pointer p-[10px] hover:bg-[#eee]'}
                    >
                      {name}
                    </li>
                  </Link>
                ) : (
                  <li key={index} className={'p-[10px] text-[#111] font-bold'}>
                    {name}
                  </li>
                )}
              </>
            )
          })}
          <Link to="/point">
            <li className="cursor-pointer p-[10px] hover:bg-[#eee]">
              Your Point
            </li>
          </Link>
          <Link to="login">
            {' '}
            <li
              onClick={logOut}
              className="cursor-pointer p-[10px] hover:bg-[#eee]"
            >
              {name === 'sign in' ? 'Sign in' : 'Log Out'}
            </li>
          </Link>
        </ul>
      </nav>
      <div
        className={`bg-[rgb(0,0,0,0.6)] absolute w-full h-full top-0 left-0 z-10 ${
          !value ? 'hidden' : ''
        }`}
      ></div>
    </header>
  )
}

export default Header
