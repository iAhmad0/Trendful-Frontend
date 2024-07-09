import { useState } from "react";
import { setGlobalState } from "../globalStates";

function PromoCode() {
  const [data, setData] = useState({
    promo: "",
  });

  const [promoResponse, setPromoResponse] = useState({
    response: "",
    isValidCode: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div action="" className="mb-6">
      <label htmlFor="Promo" className="font-bold">
        Promo code
      </label>
      <input
        type="text"
        name="promo"
        id="Promo"
        placeholder="Enter Promo Code"
        className=" p-field bg-[#eee] rounded-[3px]  ml-[10px] mr-[10px]  w-[220px] px-[5px] py-[7px] outline-none text-[13px] placeholder:text-[gray]"
        onFocus={(e) => {
          e.target.placeholder = "";
        }}
        onChange={handleChange}
        onBlur={(e) => {
          if (!e.target.value) {
            e.target.placeholder = "Enter Promo Code";
          }
        }}
      />
      <button
        className="px-[10px] py-[7px] border border-green-500  hover:bg-green-500 hover:text-[white]"
        onClick={function (e) {
          e.preventDefault();
          const dbPromo = "xs123";
          const promoField = document.querySelector(".p-field").value;
          if (!promoField) {
            setPromoResponse({
              response: "please enter a code",
              isValidCode: false,
            });
            setGlobalState("discount", 0);
          } else if (promoField === dbPromo) {
            setGlobalState("discount", 20);
            setPromoResponse({
              response: "the code is valid",
              isValidCode: true,
            });
          } else {
            setPromoResponse({
              response: "the code is invalide",
              isValidCode: false,
            });
            setGlobalState("discount", 0);
          }
          setTimeout(function () {
            setPromoResponse({
              ...promoResponse,
              response: "",
            });
          }, 1000);
        }}
      >
        Apply
      </button>

      <p
        className={`pl-[150px] transition duration-300 ${
          promoResponse.isValidCode ? "text-green-500" : "text-red-500"
        } `}
      >
        {promoResponse.response}
      </p>
    </div>
  );
}
export default PromoCode;
