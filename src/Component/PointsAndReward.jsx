import { useState } from "react";
import { MdContentCopy } from "react-icons/md";

function PointsAndReward() {
  const data = [
    {
      itemName: "Headphone",
      price: 200,
      img: "../public/images/headphones.jpg ",
      quantity: 6,
    },
    {
      itemName: "Headphone",
      price: 200,
      img: "../public/images/headphones.jpg ",
      quantity: 6,
    },
  ];
  let totalPoints = 0;
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="flex  justify-center mt-[10px]">
      <div className=" p-[10px] w-[700px] mr-10 ">
        {data.map(({ itemName, price, img, quantity }, index) => {
          totalPoints += quantity * price;
          return (
            <div
              key={index}
              className=" flex items-center mb-[15px] relative border border-gray-300 border-1 p-[10px] rounded-lg"
            >
              <img src={img} alt="" className="w-[200px]" />
              <div className="p-[10px]">
                <p className="p-[10px]">Name : {itemName}</p>
                <p className="p-[10px]">Quantity : {quantity}</p>
                <p className="p-[10px]">Points : {price}</p>
              </div>
            </div>
          );
        })}
        <div className="">
          Total Points : <span>{totalPoints}</span>
        </div>
      </div>
      <div className="border border-gray-300 border-1 mt-[10px] p-[10px] h-[378px] w-[200px] flex flex-col items-center rounded-lg">
        <label className="block mb-6">
          <input
            type="radio"
            checked={selectedOption === "500"}
            value="500"
            onChange={handleOptionChange}
          />
          500 points
        </label>
        <label className="block mb-6">
          <input
            type="radio"
            checked={selectedOption === "1000"}
            value="1000"
            onChange={handleOptionChange}
          />
          1000 points
        </label>
        <label className="mb-[40px]">
          <input
            type="radio"
            checked={selectedOption === "1500"}
            value="1500"
            onChange={handleOptionChange}
          />
          1500 points
        </label>
        <div className=" flex items-center mb-[30px]">
          <div className="bg-gray-200 w-[140px] h-[44px] mr-3 code flex items-center justify-center">
            yo junior
          </div>
          <MdContentCopy
            className="text-[18px] cursor-pointer"
            onClick={(e) => {
              navigator.clipboard.writeText(
                document.querySelector(".code").textContent
              );
              e.target.style.cursor = "grab";
              setTimeout(() => {
                e.target.style.cursor = "pointer";
              }, 70);
            }}
          />
        </div>
        <button className="border border-black-700 border-1 px-[30px] py-[7px] hover:bg-black hover:text-white duration-300 ease-in-out"></button>
      </div>
    </div>
  );
}
export default PointsAndReward;
