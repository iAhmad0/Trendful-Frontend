import React from 'react'
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from 'react-icons/bs'

function Home() {
  return (
    <main className="flex-1 p-[20px] text-white">
      <div className="flex justify-between">
        <h3 className="text-[#3E64DA]">DASHBOARD</h3>
      </div>
      <div className=" flex justify-around my-[15px]">
        <div className=" w-[24%] text-center flex flex-col justify-around p-[8px] px-[15px] rounded-[5px] bg-[black]">
          <div className="flex items-center justify-between mb-[20px]">
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className="text-[30px]" />
          </div>
          <h1>300</h1>
        </div>
        <div className=" w-[24%] text-center flex flex-col justify-around p-[8px] px-[15px] rounded-[5px] bg-[#ff6d00]">
          <div className="flex items-center justify-between mb-[20px]">
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className="text-[30px]" />
          </div>
          <h1>12</h1>
        </div>
        <div className=" w-[24%] text-center flex flex-col justify-around p-[8px] px-[15px] rounded-[5px] bg-[#2e7d32]">
          <div className="flex items-center justify-between mb-[20px]">
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className="text-[30px]" />
          </div>
          <h1>33</h1>
        </div>
        <div className=" w-[24%] text-center flex flex-col justify-around p-[8px] px-[15px] rounded-[5px] bg-[#d50000]">
          <div className="flex items-center justify-between mb-[20px]">
            <h3>ALERTS</h3>
            <BsFillBellFill className="text-[30px]" />
          </div>
          <h1>42</h1>
        </div>
      </div>
    </main>
  )
}
export default Home
