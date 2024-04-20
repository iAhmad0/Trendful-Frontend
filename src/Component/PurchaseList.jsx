import React from "react";
import { BsHandIndexThumbFill } from "react-icons/bs";

const PurchaseList = () => {
  const data = [
    {
      itemName: "name",
      price: 200,
      img: "../public/images/headphones.jpg ",
      quantity: 6,
    },
    {
      itemName: "name",
      price: 200,
      img: "../public/images/headphones.jpg ",
      quantity: 6,
    },
  ];
  return (
    // <div>hello</div>
    // <div className="w-[700px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
    //   {data.forEach(({ itemName, price, img, quantity }, index) => {
    //     return (
    //       <div
    //         key={BsHandIndexThumbFill}
    //         className=" flex justify-between items-center mb-[15px] border border-gray-300 border-1 p-[10px] rounded-lg"
    //       >
    //         <img src={img} alt="" />
    //         <div>
    //           <p>{itemName}</p>
    //           <p>{quantity}</p>
    //           <p>{price}</p>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default PurchaseList;
