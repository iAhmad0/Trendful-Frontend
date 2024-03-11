import React, { useEffect, useState } from "react";
import { useGlobalState, setGlobalState } from "../globalStates";
import axios from "axios";
import { data } from "autoprefixer";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/v1/all-products"
      );
      const items = JSON.parse(localStorage.getItem("cartItems"));
      const temp = [];
      response.data.forEach((product) => {
        items.forEach((item) => {
          if (product._id === item) temp.push(product);
        });
      });

      setCartItems(temp);
    };
    fetchData();
  }, []);
  // useEffect(() => {
  //   cartItems.forEach((product) => {
  //     console.log(product);
  //   });
  // }, [cartItems]);

  return (
    <>
      {/* {cartItems.map((product) => {
        return <div>num</div>;
      })} */}
    </>
  );
};

export default Cart;
