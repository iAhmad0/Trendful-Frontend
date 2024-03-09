import { useState } from "react";
import ProductPop from "./ProductPop";
const products = [
  {
    price: "100L.E",
    type: "Headphones",
    img: "../../public/images/headphones.jpg",
    capacity: 5,
  },
  {
    price: "EGP 249.5",
    type: "Smart Watch",
    img: "../../public/images/product-2.jpg",
    capacity: 2,
  },
  {
    price: "15000L.E",
    type: "iPhone 11",
    img: "../../public/images/mobile.jpg",
    capacity: 10,
  },
];

function SellerProductPage() {
  const [show, setShow] = useState(false);

  function showPop() {
    if (show === true) {
      return <ProductPop />;
    }
  }

  return (
    <main className="flex-1 p-[20px]">
      {showPop()}
      <div className="flex justify-between align-center">
        <h3 className="text-[#3E64DA]">PRODUCTS</h3>
        <button
          className="block border-solid border-[#3E64DA] border-[1px] hover:border-[#F39E31] hover:text-[#F39E31] text-center w-[70px]  rounded-[5px] mb-[5px] text-[#3E64DA]"
          onClick={() => setShow(!show)}
        >
          Add
        </button>
      </div>
      <div className=" flex my-[15px] justify-between flex-wrap">
        {products.map((object, index) => {
          return (
            <div key={index} className="w-[32%] bg-[#eee] mb-[10px] p-[5px]">
              <img
                src={object.img}
                alt=""
                className="w-[100%] h-[200px] object-contain mb-[10px]"
              />
              <div className="flex items-center justify-between px-[6px]">
                <div className="left self-start">
                  <h6 className="font-bold text-left text-[13px] mb-[7px] text-black">
                    {object.type}
                  </h6>
                  <h6 className="font-bold text-left text-[13px] mb-[7px] text-black">
                    {object.price}
                  </h6>
                  <a
                    href=""
                    className=" text-blue-700 text-[13px] hover:text-blue-400 block  "
                  >
                    SeeMore
                  </a>
                </div>
                <div className="right text-right">
                  <button className="block text-[#3E64DA] text-center border-solid border-[#3E64DA] border-[1px] hover:border-[#F39E31] hover:text-[#F39E31] text-[15px] w-[70px]  rounded-[5px] mb-[10px] ">
                    Delete
                  </button>
                  <button className=" text-[#3E64DA] text-center border-solid border-[#3E64DA] border-[1px] hover:border-[#F39E31] hover:text-[#F39E31] text-[15px] w-[70px] rounded-[5px] ">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
export default SellerProductPage;
