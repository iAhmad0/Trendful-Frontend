import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const imageURL = "http://localhost:3000/api/uploads/images/";

function SearchProduct() {
  const [data, setData] = useState([]);
  const { word } = useParams();

  useEffect(() => {
    const send = async () => {
      try {
        if (word) {
          const response = await axios.get(
            "http://localhost:3000/api/search/" + word
          );

          setData(response.data);
        } else {
          const response = await axios.get(
            "http://localhost:3000/api/v1/all-products"
          );

          setData(response.data);
        }
      } catch (err) {
        return;
      }
    };

    send();
  }, [word]);

  return (
    <>
      {data.map((object, index) => {
        return (
          <Link to={"/product/" + object._id} key={index}>
            <div className="h-[200px] mb-[5px] flex border-solid border-stone-300 border-[1px] rounded p-2">
              <div className="w-[200px] flex justify-center items-center">
                <img
                  src={imageURL + object.images[0]}
                  alt=""
                  className="w-fit h-fit max-h-full max-w-[200px]"
                />
              </div>
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
            </div>
          </Link>
        );
      })}
    </>
  );
}
export default SearchProduct;
