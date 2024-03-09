import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function PricingSection({ price, quantity }) {
  const leftover = Math.trunc((price - Math.floor(price)) * 100);

  return (
    <div className="mt-[10px] w-[280px] ml-[10px] border-solid rounded-[10px] p-[20px] text-left border-[#EEE] border">
      <p
        className={`relative text-[20px] font-bold pl-[20px] after:content-['${leftover}'] before:content-['EGP'] after:absolute before:absolute after:top-[5px] before:top-[5px] after:left-[58px] before:left-0 after:text-[10px] before:text-[10px]`}
      >
        {price}
      </p>
      {/* <p className="flex mt-[15px] cursor-pointer">
        <FontAwesomeIcon icon={faLocationDot} className="pr-[5px] pt-[5px]" />
        <p className="text-blue-800">
          Delivering to new Cairo City -
          <span className="block">update location</span>
        </p>
      </p> */}
      <p
        className={`mt-[10px] font-bold text-[18px]  ${
          quantity > 0 ? "text-green-600" : "text-red-600"
        } `}
      >
        {quantity > 0 ? "In Stock" : "Out of Stock"}
      </p>
      <button className="mt-[10px] mb-[10px] text-[13px] block bg-orange-300 text-center pt-[5px] pb-[5px] w-[100%] rounded-[10px]">
        Add to Cart
      </button>
      <button className="mt-[10px] mb-[10px] text-[13px] block bg-orange-500 text-center pt-[5px] pb-[5px] w-[100%] rounded-[10px]">
        Buy Now
      </button>
    </div>
  );
}
export default PricingSection;
