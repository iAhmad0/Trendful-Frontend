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
              {/* <button className="text-[13px] absolute right-[80px] bottom-[10px] border border-cyan-600 border-1 rounded-lg  text-cyan-600 p-[5px] hover:text-orange-600 hover:border-orange-600">
                Add To Cart
              </button>
              <button className="text-[13px] absolute right-[10px] bottom-[10px] border border-cyan-600 border-1 rounded-lg  text-cyan-600 p-[5px] hover:text-orange-600 hover:border-orange-600">
                Reorder
              </button> */}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PurchaseList
