import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faBars,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { setGlobalState, useGlobalState } from "../globalStates";
function logOut() {
  localStorage.removeItem("token");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("cartCounter");
  localStorage.removeItem("itemsQuantities");
}

function Header() {
  const [cartCounter] = useGlobalState("cartCounter");

  let result = false;
  const [value, setvalue] = useState(false);
  const [input, setInput] = useState(" ");
  const [name, setName] = useState("sign in");

  function check() {
    const send = async () => {
      const request = await axios.post(
        "http://localhost:3000/api/buyer/token",
        {
          token: localStorage.getItem("token"),
        }
      );
      setTimeout(() => {
        result = request.data.valid;

        if (result) {
          setName(request.data.name);
        } else {
          localStorage.removeItem("token");
        }
      }, 500);
    };
    send();
  }

  function handleSearch() {
    window.location.href = "http://localhost:5173/search/" + input;
  }

  function shownav() {
    setvalue(true);
    document.body.style.overflow = "hidden";
  }

  function deletenav() {
    setvalue(false);
    document.body.style.overflow = "visible";
  }

  const subHeader = [
    "All",
    "Mobile Phones",
    "Electronics",
    "Appliances",
    "Toys & Games",
  ];

  const navbar2 = [
    "Shop By Category",
    "Mobiles, Tablets & Accessories",
    "Computers & Office Supplies",
    "TV's & Electronics",
  ];

  const navbar4 = ["Help & Settings", "Your Account"];
  return (
    <header>
      <div className="bg-[#3E64DA]  text-white w-full flex items-center justify-between pt-[5px] pb-[5px] pr-[20px] pl-[20px]">
        <div className=" rounded cursor-pointer p-2.5 pl-0 border border-transparent border-solid">
          <Link to="/">
            <img
              src="/images/logo-nobg-white.png"
              alt=""
              className="w-[100px] h-[60px] "
            />
          </Link>
        </div>
        {/* <div className=" language cursor-pointer relative flex rounded pt-[20px] pr-[20px] pb-[10px] border border-transparent border-solid hover:border-white">
          <img
            src="./images/eg-flag.svg"
            alt=""
            className="w-[40px]  h-[30px]"
          />
          <p className="after:content-[''] after:absolute after:bottom-[8px] after:right-[-10px] after:border-[4px] after:border-solid after:border-t-white after:border-l-transparent after:border-r-transparent after:border-b-transparent relative text-[12px] pt-[5px]">
            EN
          </p>
          <div className="bg-white absolute w-[200px] bottom-[-245px] rounded hidden list-lan z-20 pb-[10px] after:content-[''] after:absolute after:border-[10px] after:border-solid after:border-l-transparent after:border-b-white after:top-[-20px] after:left-[55px] after:border-r-transparent after:border-t-transparent">
            <p className="text-black p-[10px] flex cursor-pointer">
              <input type="radio" name="language" id="one" checked />
              <label
                htmlFor="one"
                className="ml-[5px] flex-1 text-[13px] text-left border-b-[#eee] border-solid border-b p-[10px]"
              >
                العربية - AR
              </label>
            </p>
            <p className="text-black pb-[10px] pl-[10px] pr-[10px] flex cursor-pointer">
              <input type="radio" name="language" id="two" />
              <label
                htmlFor="two"
                className="ml-[5px] flex-1 text-[13px] text-left"
              >
                English - EN
              </label>
            </p>
            <p className="text-blue-700 text-[13px] text-left cursor-pointer border-b-[#eee] border-solid border-b p-[10px] ml-[20px] mr-[10px]">
              learn more
            </p>
            <p className="p-[10px] text-left text-black text-[13px]">
              <img
                src="/images/eg-flag.svg"
                alt=""
                className="w-[30px] inline-block"
              />
              You are shopping in Amazon.eg
            </p>
            <a href="" className="text-blue-700 text-[13px] pb-[10px]">
              Change country/region
            </a>
          </div>
        </div>
        <div className="absolute w-[100%] h-[100%] bg-[rgb(0,0,0,0.6)] z-10 top-[100px] left-0 hidden"></div> */}
        <div className="flex rounded overflow-hidden">
          {/* <p className=" p-2.5 bg-neutral-100 relative cursor-pointer text-[15px] text-[#595575] hover:bg-stone-400 hover:text-black">
            <span className=" mr-[15px] after:content-[''] after:absolute after:border-[5px] after:border-solid after:top-[50%] after:right-[5px] after:translate-y-[-50%] after:border-t-[#595575] after:border-l-transparent after:border-r-transparent after:border-b-transparent">
              All
            </span>
          </p> */}
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
          <div className="p-2.5 sign pr-[15px] text-left rounded cursor-pointer relative border border-transparent border-solid ">
            <span className=" block text-[10px] text-[#c7c3c7]">
              Hello, {name}
            </span>
            <span className=" after:absolute after:content-[''] after:border-[4px] after:border-solid after:border-b-transparent after:border-l-transparent after:bottom-0 after:right-[-10px] after:border-r-transparent after:border-t-white  relative font-[700] text-[12px]">
              Account & list
            </span>
            <div className="bg-white absolute w-[400px] left-[-100px] rounded hidden list-lan after:left-[190px] z-20 after:content-[''] after:absolute after:border-[5px] after:border-solid after:border-l-transparent after:border-b-white after:top-[-9px] after:border-r-transparent after:border-t-transparent">
              <p className="text-center p-[10px] border-b-[#eee] border-solid border-b mr-[20px] ml-[20px]">
                <Link to="/login">
                  <button
                    onClick={logOut}
                    className="text-black bg-orange-400 pt-[5px] pb-[5px] pr-[70px] mr-auto ml-auto pl-[70px] block rounded text-[13px]"
                  >
                    {name === "sign in" ? "Sign In" : "Log Out"}
                  </button>
                </Link>
                {name === "sign in" ? (
                  <Link to="/login">
                    <span className="text-black text-[10px]">
                      New Customer?
                    </span>
                    <span className="text-blue-700 text-[10px] ml-1">
                      Start here.
                    </span>
                  </Link>
                ) : (
                  ""
                )}
              </p>
              <div className="text-black flex p-[20px]">
                {/* <p className="flex-1 border-r-[#eee] border-solid border-r pl-[10px]">
                  <h1 className="font-bold mt-[5px] mb-[5px] cursor-text">
                    Your Lists
                  </h1>
                  <a href="" className="text-[13px]">
                    Create a List
                  </a>
                </p> */}
                <p className="flex-1 pl-[10px]">
                  <h1 className="font-bold mt-[5px] mb-[5px] cursor-text">
                    Your Account
                  </h1>
                  <Link to="/settings">
                    <span className="text-[13px]">Your Account</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="absolute w-full h-full bg-[rgb(0,0,0,0.6)] z-10 top-0 left-0 hidden"></div>
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
      <ul className="flex item-center  bg-[#3E64DC] text-white">
        {subHeader.map((name, index) => {
          return index == 0 ? (
            <li
              className="bold pt-[5px] pb-[5px] pr-[10px] ml-[30px] cursor-pointer text-[13px] rounded"
              onClick={shownav}
            >
              <FontAwesomeIcon icon={faBars} className="mr-[5px]" />
              {name}
            </li>
          ) : (
            <li
              className="pt-[5px] pb-[5px] pr-[10px] pl-[10px] cursor-pointer text-[13px] rounded"
              id={index}
            >
              {name}
            </li>
          );
        })}
      </ul>
      <FontAwesomeIcon
        icon={faXmark}
        onClick={deletenav}
        className={`absolute top-[10px] ${
          !value ? "left-[-30px]" : "left-[320px]"
        } duration-[0.3s] cursor-pointer h-[30px] text-white z-20`}
      />
      <nav
        className={`fixed  w-[300px] min-h-screen max-h-screen overflow-x-hidden bg-white z-20 top-0  duration-[0.3s] ${
          !value ? "left-[-300px]" : "left-[0px]"
        }`}
      >
        <Link to="/login">
          <div className=" bg-slate-800 text-white p-[20px] cursor-pointer">
            <FontAwesomeIcon icon={faUser} />
            <p className="inline-block ml-[5px]">Hello, {name}</p>
          </div>
        </Link>
        {/* <ul className="text-left border-b border-[silver] border-solid">
          {navbar1.map((name, index) => {
            return (
              <li
                id={index}
                className={`${
                  index == 0
                    ? "p-[10px] text-[#111] font-bold"
                    : "cursor-pointer p-[10px] hover:bg-[#eee]"
                }`}
              >
                {name}
              </li>
            );
          })}
        </ul> */}
        <ul className="text-left border-b border-[silver] border-solid">
          {navbar2.map((name, index) => {
            return (
              <li
                key={index}
                className={`${
                  index == 0
                    ? "p-[10px] text-[#111] font-bold"
                    : "cursor-pointer p-[10px] hover:bg-[#eee]"
                }`}
              >
                {name}
              </li>
            );
          })}
        </ul>
        {/* <ul className="text-left border-b border-[silver] border-solid">
          {navbar3.map((name, index) => {
            return (
              <li
                id={index}
                className={`${
                  index == 0
                    ? "p-[10px] text-[#111] font-bold"
                    : "cursor-pointer p-[10px] hover:bg-[#eee]"
                }`}
              >
                {name}
              </li>
            );
          })}
        </ul> */}
        <ul className="text-left border-b border-[silver] border-solid">
          {navbar4.map((name, index) => {
            return (
              <>
                {index == 1 ? (
                  <Link to="settings">
                    {" "}
                    <li
                      id={index}
                      className={"cursor-pointer p-[10px] hover:bg-[#eee]"}
                    >
                      {name}
                    </li>
                  </Link>
                ) : (
                  <li id={index} className={"p-[10px] text-[#111] font-bold"}>
                    {name}
                  </li>
                )}
              </>
            );
          })}
          <Link to="login">
            {" "}
            <li
              onClick={logOut}
              className="cursor-pointer p-[10px] hover:bg-[#eee]"
            >
              {name === "sign in" ? "Sign in" : "Log Out"}
            </li>
          </Link>
        </ul>
      </nav>
      <div
        className={`bg-[rgb(0,0,0,0.6)] absolute w-full h-full top-0 left-0 z-10 ${
          !value ? "hidden" : ""
        }`}
      ></div>
      {check()}
    </header>
  );
}

export default Header;
