import axios from "axios";
import { useEffect, useState } from "react";

const imageURL = "http://localhost:3000/api/uploads/images/";

function SellerHistory() {
  const [data, setData] = useState([]);

  async function getHistory() {
    const response = await axios.post(
      "http://localhost:3000/api/seller/purchase-history",
      {
        token: localStorage.getItem("sellerToken"),
      }
    );

    const products = response.data;
    const allProducts = [];

    if (response) {
      for (let i = 0; i < products.length; i++) {
        const response = await axios.get(
          "http://localhost:3000/api/v1/" + products[i].productID
        );

        const product = response.data;

        const info = {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: products[i].quantity,
          images: product.images,
        };

        allProducts.push(info);
      }
    }
    setData(allProducts);
  }

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div className="w-[500px] p-2 mx-auto my-2">
      {data.map((product, index) => {
        return (
          <div
            key={index}
            className="flex justify-between items-center mb-[15px] relative border border-gray-300 border-1 p-2 pr-10 rounded-lg"
          >
            <img src={imageURL + product.images[0]} alt="" className="h-48" />

            <div>
              <p className="my-2">Name: {product.name}</p>
              <p className="my-2">Quantity: {product.quantity}</p>
              <p className="my-2">Price: {product.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SellerHistory;
