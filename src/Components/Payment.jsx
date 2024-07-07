import { useEffect, useState } from "react";
import AddressInfo from "./AddressInfo";
import BankInfo from "./BankInfo";
import SelectShipping from "./SelectShipping";
import SelectPayment from "./SelectPayment";
import PromoCode from "./PromoCode";
import axios from "axios";
import { useGlobalState } from "../globalStates";

const Payment = () => {
  const [products, setProducts] = useState([]);
  const total = localStorage.getItem("total");
  const [data, setData] = useState([]);

  const credit = useGlobalState("credit")[0];
  const discount = useGlobalState("discount")[0];
  const shipping = useGlobalState("shipping")[0];
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
      if (cart.length) {
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

          setProducts([...products, info]);
        }
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = [];
    order.push(localStorage.getItem("token"));
    order.push(data);
    order.push(cart);
    order.push(shipping);
    order.push(Number(total));

    try {
      const response = await axios.post(
        "http://localhost:3000/api/make-order",
        order
      );
      localStorage.removeItem("cart");
      localStorage.removeItem("total");
      window.location.href = "http://localhost:5173/history";
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="  p-[10px] w-[80%] mx-auto mt-[10px]">
        <img src="/public/images/logo.png" alt="" className="w-40 mx-auto" />

        <h1 className="font-bold my-1">CHECKOUT</h1>

        <div className="flex justify-around">
          <AddressInfo handleInfo={handleChange} />

          {credit == "block" ? (
            <div className={`w-[49%]`}>
              <BankInfo handleInfo={handleChange} />
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="flex justify-between items-center">
          <SelectShipping />

          <SelectPayment />
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
            <p>{shipping}</p>
          </div>
        </div>

        <div className="flex items-center justify-between font-bold my-[10px]">
          <p>TOTAL</p>
          <p>{Number(total) + shipping - 0} EGP</p>
        </div>

        <button
          type="submit"
          className="w-[100%] text-center bg-[#3E64DA] py-[10px] rounded-[10px] font-bold p-[5px] text-white"
        >
          Complete Check
        </button>
      </div>
    </form>
  );
};
export default Payment;
