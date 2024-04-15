import React, { useEffect, useState } from "react";
import { useGlobalState, setGlobalState } from "../globalStates";
import axios from "axios";
import { data } from "autoprefixer";
import { json } from "react-router-dom";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  let [itemsQuan, setItemsQuan] = useState(
    JSON.parse(localStorage.getItem("itemsQuantities"))
  );
  // const computeTotal = function () {
  //   const itemsQuan = JSON.parse(localStorage.getItem("itemsQuantities"));
  //   console.log(cartItems);
  // };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/v1/all-products"
      );

      const items = JSON.parse(localStorage.getItem("cartItems"));
      const temp = [];
      items.forEach((item) => {
        response.data.forEach((product) => {
          if (product._id === item) temp.push(product);
        });
      });

      setCartItems(temp);
      const itemsQuan = JSON.parse(localStorage.getItem("itemsQuantities"));
      let sum = 0;
      temp.forEach(function (element, i) {
        sum += element.price * itemsQuan[i];
      });
      setTotal(sum);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="w-[700px]  absolute left-[50%] top-[25%] transform translate-x-[-50%]">
        {cartItems.map((product, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center mb-[15px] border border-gray-300 border-1 p-[10px] rounded-lg"
            >
              <img src={product.images[0]} alt="" className="w-[70px]" />
              <span className="border border-gray-300 border-1 text-[25px]">
                <span
                  className="border-r border-grey-300 px-[10px] py-[6px] cursor-pointer text-gray-400"
                  onClick={() => {
                    if (itemsQuan[index] > 1) {
                      const itemsNumber = itemsQuan;
                      itemsNumber[index]--;
                      localStorage.setItem(
                        "itemsQuantities",
                        JSON.stringify(itemsNumber)
                      );
                      setItemsQuan(
                        JSON.parse(localStorage.getItem("itemsQuantities"))
                      );
                      setTotal(total - product.price);
                    }
                  }}
                >
                  -
                </span>
                <span className="p-[10px]">{itemsQuan[index]}</span>
                <span
                  className="border-l-[1px] border-grey-300 px-[10px] py-[6px] cursor-pointer text-gray-400"
                  onClick={() => {
                    const itemsNumber = itemsQuan;
                    itemsNumber[index]++;
                    localStorage.setItem(
                      "itemsQuantities",
                      JSON.stringify(itemsNumber)
                    );

                    setItemsQuan(
                      JSON.parse(localStorage.getItem("itemsQuantities"))
                    );
                    setTotal(total + product.price);
                  }}
                >
                  +
                </span>
              </span>
              <div>
                <p className="text-[20px]">{product.name}</p>
                <p className="text-[15px] text-gray-500 mb-[15px]">
                  {product.price * itemsQuan[index]}
                </p>
                <button
                  className="border border-red-300 border-1 px-[5px] py-[7px] hover:bg-red-500 hover:text-[white] transition duration-300  linear "
                  onClick={() => {
                    const items = JSON.parse(localStorage.getItem("cartItems"));

                    let itemsCounter = Number(
                      localStorage.getItem("cartCounter")
                    );
                    itemsCounter--;
                    localStorage.setItem("cartCounter", itemsCounter);
                    setGlobalState("cartCounter", itemsCounter);
                    const newItemsIds = items.filter((item) => {
                      return item !== product._id;
                    });
                    localStorage.setItem(
                      "cartItems",
                      JSON.stringify(newItemsIds)
                    );
                    const newItems = cartItems.filter((item) => {
                      return item._id !== product._id;
                    });
                    setCartItems(newItems);
                    const itemsNumber = JSON.parse(
                      localStorage.getItem("itemsQuantities")
                    );
                    const newItemsNumber = itemsNumber.filter((i, ind) => {
                      return ind !== index;
                    });
                    console.log(newItemsNumber);
                    localStorage.setItem(
                      "itemsQuantities",
                      JSON.stringify(newItemsNumber)
                    );
                    setItemsQuan(newItemsNumber);
                    setTotal(total - product.price * itemsQuan[index]);
                  }}
                >
                  Remove Item
                </button>
              </div>
            </div>
          );
        })}
        {cartItems.length > 0 ? (
          <div className="flex  justify-between p-[10px]  ">
            <div>
              <span>Total:{total}</span>
              <span></span>
            </div>
            <button className="border border-green-300 border-1 px-[5px] py-[7px] hover:bg-green-500 hover:text-[white] transition duration-300  linear">
              Purchase
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Cart;
