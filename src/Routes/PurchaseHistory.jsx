import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";

const imageURL = "http://localhost:3000/api/uploads/images/";

function PurchaseHistory() {
  const [data, setData] = useState([]);

  async function getHistory() {
    if (localStorage.getItem("token") != undefined) {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/purchase-history",
          {
            token: localStorage.getItem("token"),
          }
        );

        const products = [];
        for (let i = 0; i < response.data.length; i++) {
          products.push(...response.data[i]);
        }

        const allProducts = [];

        for (let i = 0; i < products.length; i++) {
          const response = await axios.get(
            "http://localhost:3000/api/v1/" + products[i].id
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

        setData(allProducts);
      } catch (error) {
        return <Navigate to="/" replace />;
      }
    }
  }

  useEffect(() => {
    getHistory();
  }, []);

  if (localStorage.getItem("token") == undefined) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="w-[500px] grid items-center gap-4 mx-auto my-8">
      {data.map((product) => {
        return (
          <div
            key={product.id}
            className="grid grid-cols-2 p-2 border border-gray-300 border-1 rounded-lg"
          >
            <div className="flex justify-center items-center">
              <Link to={"/product/" + product.id}>
                <img
                  src={imageURL + product.images[0]}
                  alt=""
                  className="max-w-48 max-h-32"
                />
              </Link>
            </div>

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

export default PurchaseHistory;
