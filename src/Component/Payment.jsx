import { useState } from "react";
import { useLocation } from "react-router-dom";
const address = [
  { type: "text", Abstract: "First Name*", id: "fname" },
  { type: "text", Abstract: "Last Name*", id: "lname" },
  { type: "email", Abstract: "Email Address*", id: "email" },
  { type: "text", Abstract: "Telephone*", id: "telephone" },
  { type: "text", Abstract: "Address", id: "address" },
  { type: "text", Abstract: "Town", id: "town" },
  { type: "text", Abstract: "Country", id: "country" },
  { type: "text", Abstract: "Postal Code", id: "Pcode" },
];
const netBanking = [
  {
    id: "bank",
    Abstract: "XXXX XXXX XXXX XXXX",
    label: "VISA Card Number",
    error: "Credit Card Number",
    regex: /^\d{4}(?:\s\d{4}){3}$/,
  },
  {
    id: "cvc",
    Abstract: "CVC",
    label: "CVC/CVV",
    error: "CVC Number",
    regex: /^\d{3}$/,
  },
  {
    id: "EX",
    Abstract: "MM/YY",
    label: "Expire Date",
    error: "Expire Date",
    regex: /^(0[1-9]|1[0-2])\/(0[0-9]|1[0-9]|2[0-9]|3[0-9])$/,
  },
  {
    id: "Cname",
    Abstract: "Name Of Card",
    label: "Name Of Card",
    error: "Name Of Credit Card",
    regex: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
  },
];

const Payment = () => {
  const [shipping, setShipping] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [credit, setCredit] = useState("hidden");
  const [error, setError] = useState("");
  const [total, setTotal] = useState(localStorage.getItem("total"));
  const [promoResponse, setPromoResponse] = useState({
    response: "",
    isValidCode: false,
  });
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    telephone: "",
    address: "",
    town: "",
    country: "",
    Pcode: "",
    bank: "",
    cvc: "",
    EX: "",
    pay: "",
    ship: "",
    promo: "",
    Cname: "",
  });
  const items = localStorage.getItem("toBuyItem").includes("[")
    ? JSON.parse(localStorage.getItem("toBuyItem"))
    : localStorage.getItem("toBuyItem");

  const itemsQuan = JSON.parse(localStorage.getItem("itemsQuantities"));
  let str = "";
  if (Array.isArray(items))
    items.forEach(function (item, i) {
      i !== items.length - 1
        ? (str += `${item}:${itemsQuan[i]},`)
        : (str += `${item}:${itemsQuan[i]}`);
    });
  else str = `${items}:1`;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="  p-[10px] w-[80%] mx-auto mt-[10px]">
        <img src="/public/images/favicon.png" alt="" className="mx-auto my-4" />
        <h1 className="font-bold my-1">CHECKOUT</h1>
        <div className="flex justify-around">
          <div className="border-[1px] border-solid  border-[gray] rounded-[10px] mr-[10px] text-[15px] p-[5px] w-[100%]">
            <h1 className="mb-[5px] ml-[10px]">
              BILLING ADDRESS{" "}
              <span className="text-[10px] text-red-700">Required Field*</span>
            </h1>
            {address.map((object, index) => {
              return (
                <input
                  onChange={handleChange}
                  key={index}
                  onFocus={(e) => {
                    e.target.placeholder = "";
                  }}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      e.target.placeholder = address[index].Abstract;
                    }
                  }}
                  name={object.id}
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
            {data.Pcode &&
            data.address &&
            data.country &&
            data.fname &&
            data.lname &&
            data.telephone &&
            data.town &&
            data.email ? (
              ""
            ) : (
              <div className="text-[13px] text-[red] p-[5px] ml-[10px]">
                You Must fill this Form
              </div>
            )}
          </div>
          <div className={`w-[49%] ${credit}`}>
            <div
              action=""
              className="border-[1px] border-solid border-[gray] rounded-[10px] text-[15px] p-[5px] w-[100%]"
            >
              <h1 className="mb-[10px] ml-[10px]">NET BANKING</h1>
              {netBanking.map((object, index) => {
                return (
                  <>
                    <label
                      htmlFor={object.id}
                      className="ml-[10px] text-[12px] mt-6 font-bold block"
                      key={index}
                    >
                      {object.label}
                    </label>
                    <input
                      key={index}
                      onChange={(e) => {
                        const name = e.target.name;
                        const value = e.target.value;
                        const check = object.regex;
                        // Example regex for a simple email validation
                        const isValid = check.test(value);
                        setError(isValid ? "" : object.id);
                        setData((prev) => {
                          return { ...prev, [name]: value };
                        });
                        if (!e.target.value) {
                          setError("");
                        }
                      }}
                      name={object.id}
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
                      className={`bg-[#eee] rounded-[3px]  ml-[10px]  ${
                        index === 1 || index === 2 ? "w-[220px]" : "w-[460px]"
                      } p-[5px] outline-none text-[13px] placeholder:text-[gray]`}
                    />
                    {error === object.id ? (
                      <div className="text-[13px] p-[5px]  ml-[10px] text-[red]">
                        Invalid {object.error}
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
              {data.Cname && data.EX && data.bank && data.cvc ? (
                ""
              ) : (
                <div className="text-[13px] text-[red] p-[5px] ml-[10px]">
                  You Must fill this Form
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="py-[10px] w-[49%]">
            <h1 className="font-bold">Select Shipping Method</h1>
            <div>
              <div className="my-2">
                <input
                  required
                  type="radio"
                  name="ship"
                  value="50"
                  id="one"
                  onClick={(e) => {
                    const { name, value } = e.target;
                    setData((prev) => {
                      return { ...prev, [name]: value };
                    });
                    setShipping(50);
                  }}
                />
                <label htmlFor="one" className="ml-[10px]">
                  Standard Shipping 50EGP
                </label>
              </div>

              <div className="my-2">
                <input
                  required
                  type="radio"
                  name="ship"
                  id="two"
                  value="100"
                  onClick={(e) => {
                    const { name, value } = e.target;
                    setData((prev) => {
                      return { ...prev, [name]: value };
                    });
                    setShipping(100);
                  }}
                />
                <label htmlFor="two" className="ml-[10px]">
                  Express Shipping 100EGP
                </label>
                {data.ship ? (
                  ""
                ) : (
                  <div className="text-[13px] text-[red] p-[5px] ml-[10px]">
                    You Must fill this Form
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="py-[10px] w-[49%]">
            <h1 className="font-bold">Payment</h1>
            <div>
              <div className="my-2">
                <input
                  type="radio"
                  onClick={function (e) {
                    setCredit("block");
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
                    setCredit("hidden");
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
        </div>
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
                setDiscount(0);
              } else if (promoField === dbPromo) {
                setDiscount(20);
                setPromoResponse({
                  response: "the code is valid",
                  isValidCode: true,
                });
              } else {
                setPromoResponse({
                  response: "the code is invalide",
                  isValidCode: false,
                });
                setDiscount(0);
              }
              setTimeout(function () {
                setPromoResponse({
                  ...promoResponse,
                  response: "",
                });
              }, 1000);
            }}
          >
            apply code
          </button>
          <p
            className={`pl-[150px] transition duration-300 ${
              promoResponse.isValidCode ? "text-green-500" : "text-red-500"
            } `}
          >
            {promoResponse.response}
          </p>
        </div>

        <div className="border-y-solid  border-y-slate-500  border-y-[3px]">
          <h1 className="w-fit mx-auto font-bold">Invoice</h1>
          <div className="flex items-center justify-between p-[5px]">
            <p>items</p>
            <p>{str}</p>
          </div>
          <div className="flex items-center justify-between p-[5px]">
            <p>Total Cost</p>
            <div>
              <p className={`${discount ? "line-through" : ""}`}>{total}</p>
              {discount ? (
                <p className="text-right no-underline	 ">{total - discount}</p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="flex items-center justify-between p-[5px]">
            <p>Shipping Cost</p>
            <p>{shipping}</p>
          </div>
        </div>
        <div className="flex items-center justify-between font-bold my-[10px]">
          <p>TOTAL</p>
          <p>{Number(total) + shipping - discount} EGP</p>
        </div>
        <button
          type="submit"
          className="w-[100%] text-center bg-[#3E64DA] py-[10px] rounded-[10px] font-bold p-[5px] text-white"
        >
          Complete Check
        </button>
      </div>
    </form>
  );
};
export default Payment;
