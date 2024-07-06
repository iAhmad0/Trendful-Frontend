import SellerHeader from "../Components/SellerHeader";
import { useEffect, useState } from "react";
import axios from "axios";
const imageURL = "http://localhost:3000/api/uploads/images/";

function Inventory() {
  const [products, setProducts] = useState([]);

  async function getSellerProducts() {
    try {
      const response = await axios.get(
        "http://localhost:3000/seller/get-products" +
          "/" +
          localStorage.getItem("sellerToken")
      );

      setProducts(response.data);
    } catch (error) {}
  }

  useEffect(() => {
    getSellerProducts();
  }, [products]);

  return (
    <main className="flex-1 p-[20px] text-white">
      <div className="flex justify-between">
        <h3 className="text-[#3E64DA]">INVENTORY</h3>
      </div>

      <SellerHeader />

      <table className=" bg-[#eee] w-[100%] border-collapse border  my-[15px] mt-[20px] border-[black]">
        <tr className=" text-[white] w-[25%] text-center bg-[#3E64DA] h-[60px] border-collapse border border-[black]">
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>

        {products.map((product, index) => {
          return (
            <tr
              key={index}
              className="text-[black] text-center border-collapse border border-[black]"
            >
              <td className="flex justify-center">
                <img
                  src={imageURL + product.images[0]}
                  alt=""
                  className="h-52 my-2"
                />
              </td>
              <td className="w-[25%] text-center">{product.name}</td>
              <td className="w-[25%] text-center">{product.price}</td>
              <td className="w-[25%] text-center ">{product.quantity}</td>
            </tr>
          );
        })}
      </table>
    </main>
  );
}

export default Inventory;
