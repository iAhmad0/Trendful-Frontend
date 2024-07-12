import Product from "../Components/Product";

import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/v1/home-products"
      );

      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-[rgb(227,230,230)] min-h-screen p-8">
      <div className="bg-white p-5">
        <h1 className="font-bold mb-10">Products</h1>

        <div className="grid grid-cols-6 gap-8">
          {data.map((object, index) => {
            return (
              <Product
                key={index}
                link={object._id}
                img={object.image}
                name={object.name}
                price={object.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
