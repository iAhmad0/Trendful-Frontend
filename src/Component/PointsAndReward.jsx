import { useState } from 'react'

function PointsAndReward() {
  const data = [
    {
      itemName: 'Headphone',
      price: 200,
      img: '../public/images/headphones.jpg ',
      quantity: 6,
    },
    {
      itemName: 'Headphone',
      price: 200,
      img: '../public/images/headphones.jpg ',
      quantity: 6,
    },
  ]
  let totalPoints = 0
  return (
    <div className="mx-auto p-[10px] w-[700px] ">
      {data.map(({ itemName, price, img, quantity }, index) => {
        totalPoints += quantity * price
        return (
          <div
            key={index}
            className=" flex items-center mb-[15px] relative border border-gray-300 border-1 p-[10px] rounded-lg"
          >
            <img src={img} alt="" className="w-[200px]" />
            <div className="p-[10px]">
              <p className="p-[10px]">Name : {itemName}</p>
              <p className="p-[10px]">Quantity : {quantity}</p>
              <p className="p-[10px]">Points : {price}</p>
            </div>
          </div>
        )
      })}
      <div className="">
        Total Points : <span>{totalPoints}</span>
      </div>
    </div>
  )
}
export default PointsAndReward
