import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function SearchProduct({ link }) {
  let path = link;
  path = path.substring(path.lastIndexOf("/") + 1);

  const [data, setData] = useState([]);

  useEffect(() => {
    const send = async () => {
      try {
        if (path) {
          const request = await axios.post(
            "http://localhost:3000/api/v1/search",
            {
              search: path,
            }
          );
          setData(request.data);
        } else {
          const response = await axios.get(
            "http://localhost:3000/api/v1/all-products"
          );
          setData(response.data);
        }
      } catch (err) {}
    };
    send();
  }, []);

  return (
    <>
      {data.map((object, index) => {
        return (
          <Link
            to={"/product/" + object._id}
            key={index}
            className="w-[45%] mb-[5px] flex border-solid border-stone-300 border-[1px] rounded p-2"
          >
            <img
              src={object.images[0]}
              alt=""
              className="w-[200px] h-[200px]"
            />
            <div className="flex-1 text-[black] ml-4">
              {" "}
              <h1 className="font-bold text-left mb-[5px]">{object.name}</h1>
              <h1 className="text-left mb-[10px]">{object.description}</h1>
            </div>
            <div className="flex justify-end items-end">
              {" "}
              <h1 className="font-bold text-left mb-[10px]">
                EGP {object.price}
              </h1>
            </div>
          </Link>
        );
      })}
    </>
  );
}
export default SearchProduct;
