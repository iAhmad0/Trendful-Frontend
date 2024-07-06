import React from 'react'
// import { BsHandIndexThumbFill } from 'react-icons/bs'

const PurchaseList = () => {
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
  return (
    <div className="mx-auto w-[700px] p-[10px]">
      {data.map(({ itemName, price, img, quantity }, index) => {
        return (
          <div
            key={index}
            className=" flex items-center mb-[15px] relative border border-gray-300 border-1 p-[10px] rounded-lg"
          >
            <img src={img} alt="" className="w-[200px]" />
            <div className="p-[10px]">
              <p className="p-[10px]">Name : {itemName}</p>
              <p className="p-[10px]">Quantity : {quantity}</p>
              <p className="p-[10px]">Price : {price}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PurchaseList
