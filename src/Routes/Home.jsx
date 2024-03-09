import Product from "../Component/Product";
import Header from "../Component/Header";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/v1/all-products"
      );
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <main className="bg-[rgb(227,230,230)] p-[20px] h-screen">
        {/* <div className="m-[10px] mb-[20px] flex justify-between items-center">
          {card.map((object) => {
            return <Cards {...object} />;
          })}
        </div> */}
        <div className="m-[10px] mb-[20px] bg-white p-[20px]">
          <h1 className="font-bold text-left mb-[10px]">Products</h1>
          <div className="flex items-center">
            {data.map((object, index) => {
              return (
                <Product
                  key={index}
                  img={object.images[0]}
                  name={object.name}
                  price={object.price}
                  link={object._id}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
