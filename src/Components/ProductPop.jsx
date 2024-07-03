import { useState } from "react";
import OptionBox from "./OptionBox";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";

const ProductPop = ({ seller }) => {
  const [data, setData] = useState({
    name: "",
    quantity: "",
    price: "",
    images: "",
    description: "",
    category: "",
  });

  const [pop, setPop] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    async function addProduct() {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/add-product",
          {
            token: localStorage.getItem("sellerToken"),
            name: data.name,
            description: data.description,
            images: data.images,
            price: data.price,
            quantity: data.quantity,
            category: data.category,
          },
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      } catch (error) {}
    }
    addProduct();
    setPop(false);
  }

  return pop ? (
    <>
      <div
        className=" absolute w-full min-h-screen left-0 top-0 bg-black bg-opacity-50"
        onClick={() => setPop(false)}
      ></div>
      <div className="absolute w-96 text-[20px] rounded-[10px] max-h-[95%] overflow-auto bg-white z-100  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5">
        <IoIosArrowBack
          className="absolute text-[#3E64DA] top-[6px] left-[10px] cursor-pointer"
          onClick={() => setPop(false)}
        />
        <form className="text-base" onSubmit={handleSubmit}>
          <OptionBox
            title="Name"
            type="text"
            placeholder="Enter product name"
            name="name"
            handleCh={handleChange}
          />
          <OptionBox
            title="Description"
            placeholder="at least 10 characters"
            name="description"
            handleCh={handleChange}
          />
          <OptionBox
            title="Price"
            type="number"
            name="price"
            handleCh={handleChange}
          />
          <OptionBox
            title="Quantity"
            type="number"
            name="quantity"
            handleCh={handleChange}
          />
          <OptionBox
            title="Category"
            isSelected={true}
            name="category"
            handleCh={handleChange}
          />
          {/* Image */}
          <OptionBox
            title="Choose Images (at least 1 image)"
            type="file"
            map="map"
            name="images"
            handleCh={(images) => {
              setData({
                ...data,
                images: images,
              });
            }}
          />
          <div className="flex justify-center">
            <button className="block border-solid text-base px-4 py-1 mt-4 border-[#3E64DA] border-[1px] hover:border-[#F39E31] hover:text-[#F39E31] text-center  rounded-[5px] mb-[5px] text-[#3E64DA]">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </>
  ) : (
    ""
  );
};

export default ProductPop;
