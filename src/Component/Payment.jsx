import { useState } from "react";

const address = [
  { type: "text", Abstract: "First Name*" },
  { type: "text", Abstract: "Last Name*" },
  { type: "email", Abstract: "Email Address*" },
  { type: "text", Abstract: "Telephone*" },
  { type: "text", Abstract: "Address" },
  { type: "text", Abstract: "Town" },
  { type: "text", Abstract: "Country" },
  { type: "text", Abstract: "Postal Code" },
];
const netBanking = [
  { id: "bank", Abstract: "XXXX XXXX XXXX XXXX", label: "VISA Card Number" },
  { id: "cvc", Abstract: "CVC", label: "CVC/CVV" },
  { id: "EX", Abstract: "MM/YY", label: "Expire Date" },
  { id: "name", Abstract: "Name", label: "Name Of Card" },
];

const Payment = (props) => {
  const [shipping, setShipping] = useState(0);
  const [discount, setDiscount] = useState("");
  return (
    <main className="">
      <div className="  p-[10px] w-[80%] mx-auto mt-[10px]">
        <img src="/public/images/favicon.png" alt="" className="mx-auto my-4" />
        <h1 className="font-bold my-1">CHECKOUT</h1>
        <div className="flex justify-between">
          <form
            action=""
            className="border-[1px] border-solid  border-[gray] rounded-[10px] text-[15px] p-[5px] w-[49%]"
          >
            <h1 className="mb-[5px] ml-[10px]">
              BILLING ADDRESS{" "}
              <span className="text-[10px] text-red-700">Required Field*</span>
            </h1>
            {address.map((object, index) => {
              return (
                <input
                  key={index}
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      e.target.placeholder = address[index].Abstract;
                    }
                  }}
                  type={object.type}
                  required
                  placeholder={object.Abstract}
                  className={`bg-[#eee] rounded-[3px] ml-[10px] my-2  ${
                    index < 2 ? "w-[220px]" : "w-[460px]"
                  } w-[220px] ${
                    index === 0 ? "mr-[10px]" : ""
                  } p-[5px] outline-none text-[13px] placeholder:text-[gray]`}
                />
              );
            })}
          </form>
          <div className="w-[49%]">
            <form
              action=""
              className="border-[1px] border-solid border-[gray] rounded-[10px] text-[15px] p-[5px] w-[100%]"
            >
              <h1 className="mb-[10px] ml-[10px]">NET BANKING</h1>
              {netBanking.map((object, index) => {
                return (
                  <>
                    <label
                      htmlFor={object.id}
                      className="ml-[10px] text-[12px] font-bold block"
                      id={index}
                    >
                      {object.label}
                    </label>
                    <input
                      id={object.id}
                      type="text"
                      required
                      placeholder={object.Abstract}
                      onFocus={(e) => {
                        e.target.placeholder = "";
                      }}
                      onBlur={(e) => {
                        if (!e.target.value) {
                          e.target.placeholder = netBanking[index].Abstract;
                        }
                      }}
                      className={`bg-[#eee] rounded-[3px]  ml-[10px] mb-6 ${
                        index === 1 || index === 2 ? "w-[220px]" : "w-[460px]"
                      } p-[5px] outline-none text-[13px] placeholder:text-[gray]`}
                    />
                  </>
                );
              })}
            </form>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="py-[10px] w-[49%]">
            <h1 className="font-bold">Select Shipping Method</h1>
            <form action="">
              <div className="my-2">
                <input
                  type="radio"
                  name="ship"
                  id="one"
                  onClick={() => {
                    setShipping(50);
                  }}
                />
                <label htmlFor="one" className="ml-[10px]">
                  Standard Shipping 50EGP
                </label>
              </div>

              <div className="my-2">
                <input
                  type="radio"
                  name="ship"
                  id="two"
                  onClick={() => {
                    setShipping(100);
                  }}
                />
                <label htmlFor="two" className="ml-[10px]">
                  Express Shipping 100EGP
                </label>
              </div>
            </form>
          </div>
          <div className="py-[10px] w-[49%]">
            <h1 className="font-bold">Payment</h1>
            <form action="">
              <div className="my-2">
                <input type="radio" name="pay" id="credit" />
                <label htmlFor="credit" className="ml-[10px]">
                  Credit Card
                </label>
              </div>
              <div className="my-2">
                <input type="radio" name="pay" id="cash" />
                <label htmlFor="cash" className="ml-[10px]">
                  Cash
                </label>
              </div>
            </form>
          </div>
        </div>
        <form action="">
          <label htmlFor="Promo" className="font-bold">
            Promo code
          </label>
          <input
            type="text"
            name=""
            id="Promo"
            placeholder="Enter Promo Code"
            required
            className="bg-[#eee] rounded-[3px]  ml-[10px] mb-6 w-[220px] p-[5px] outline-none text-[13px] placeholder:text-[gray]"
            onFocus={(e) => {
              e.target.placeholder = "";
            }}
            onBlur={(e) => {
              if (!e.target.value) {
                e.target.placeholder = "Enter Promo Code";
              }
            }}
          />
        </form>
        <div className="border-y-solid  border-y-slate-500  border-y-[3px]">
          <h1 className="w-fit mx-auto font-bold">Invoice</h1>
          <div className="flex items-center justify-between p-[5px]">
            <p>Total Cost</p>
            <p>{props.props}</p>
          </div>
          {discount ? (
            <div className="flex items-center justify-between p-[5px]">
              <p>Discount</p>
              <p>{discount}</p>
            </div>
          ) : (
            ""
          )}
          <div className="flex items-center justify-between p-[5px]">
            <p>Shipping Cost</p>
            <p>{shipping}</p>
          </div>
        </div>
        <div className="flex items-center justify-between font-bold my-[10px]">
          <p>TOTAL</p>
          <p>{Number(props.props) + shipping} EGP</p>
        </div>
        <button className="w-[100%] text-center bg-[#3E64DA] py-[10px] rounded-[10px] font-bold p-[5px] text-white">
          Complete Check
        </button>
      </div>
    </main>
  );
};
export default Payment;
