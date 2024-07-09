import AddressInfo from "../Components/AddressInfo";
import BankInfo from "../Components/BankInfo";
import SelectShipping from "../Components/SelectShipping";
import SelectPayment from "../Components/SelectPayment";
import PromoCode from "../Components/PromoCode";
import axios from "axios";
import { setGlobalState, useGlobalState } from "../globalStates";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Payment() {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  const discount = useGlobalState("discount")[0];
  const cart = JSON.parse(localStorage.getItem("cart"));

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const allProducts = [];

      if (cart) {
        for (let i = 0; i < cart.length; i++) {
          const response = await axios.get(
            "http://localhost:3000/api/v1/" + cart[i].id
          );

          const product = response.data;

          const info = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: cart[i].quantity,
            images: product.images,
          };

          allProducts.push(info);
        }

        setProducts(allProducts);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
      sum += products[i].price * products[i].quantity;
    }

    setTotal(sum);
  }, [products]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(data).length >= 8 && cart.length != 0 && total != 0) {
      const order = [];
      order.push(localStorage.getItem("token"));
      order.push(data);
      order.push(cart);
      order.push(Number(total));

      try {
        const response = await axios.post(
          "http://localhost:3000/api/make-order",
          order
        );

        localStorage.removeItem("cart");
        window.dispatchEvent(new Event("storage"));
        window.location.href = "http://localhost:5173/history";
      } catch (error) {
        return;
      }
    }
  };

  if (
    localStorage.getItem("token") == undefined ||
    cart == null ||
    cart.length == 0
  ) {
    return <Navigate to="/login" replace />;
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <div className="  p-[10px] w-[80%] mx-auto mt-[10px]">
          <img src="/public/images/logo.png" alt="" className="w-40 mx-auto" />

          <h1 className="font-bold my-1">CHECKOUT</h1>

          <div className="flex justify-around">
            <AddressInfo handleChange={handleChange} />

            {data.payMethod == "credit" ? (
              <div className={`w-[49%]`}>
                <BankInfo handleChange={handleChange} />
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="flex justify-between items-center">
            <SelectShipping handleChange={handleChange} />

            <SelectPayment handleChange={handleChange} />
          </div>

          <PromoCode />

          <table className="w-full">
            <caption className="font-bold">Invoice</caption>

            <thead>
              <tr>
                <th className="w-3/4 text-left">Product</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product, index) => {
                return (
                  <tr key={index} className="text-center">
                    <td className="text-left">{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                    <td>{product.price * product.quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="border-y-solid  border-y-slate-500 border-y-[3px] my-5 py-2 pr-3">
            <div className="flex items-center justify-between">
              <p>Sub Total</p>

              <div>
                <p className={`${discount ? "line-through" : ""}`}>{total}</p>
                {discount ? (
                  <p className="text-right no-underline	 ">{total - discount}</p>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p>Shipping Cost</p>
              <p>{data.shipping}</p>
            </div>
          </div>

          <div className="flex items-center justify-between font-bold my-[10px]">
            <p>TOTAL</p>
            <p>
              {data.shipping != undefined
                ? `${Number(total) + Number(data.shipping) - 0} EGP`
                : ""}
            </p>
          </div>

          <button
            type="submit"
            className="w-[100%] text-center bg-[#3E64DA] py-[10px] rounded-[10px] font-bold p-[5px] text-white"
          >
            Checkout
          </button>
        </div>
      </form>
    );
  }
}

export default Payment;