import { useState } from "react";
import { setGlobalState } from "../globalStates";

function SelectPayment() {
  const [data, setData] = useState({
    pay: "",
  });

  return (
    <div className="py-[10px] w-[49%]">
      <h1 className="font-bold">Payment</h1>
      <div>
        <div className="my-2">
          <input
            type="radio"
            onClick={function (e) {
              setGlobalState("credit", "block");
              const { name, value } = e.target;
              setData((prev) => {
                return { ...prev, [name]: value };
              });
            }}
            name="pay"
            id="credit"
            value="credit"
          />
          <label htmlFor="credit" className="ml-[10px]">
            Credit Card
          </label>
        </div>
        <div className="my-2">
          <input
            type="radio"
            name="pay"
            onClick={function (e) {
              setGlobalState("credit", "hidden");
              const { name, value } = e.target;
              setData((prev) => {
                return { ...prev, [name]: value };
              });
            }}
            id="cash"
            value="cash"
          />
          <label htmlFor="cash" className="ml-[10px]">
            Cash
          </label>
        </div>
      </div>
    </div>
  );
}
export default SelectPayment;
