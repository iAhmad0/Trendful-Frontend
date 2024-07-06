import { useEffect, useState } from "react";
import ProductPop from "./ProductPop";
import { FaCircleXmark } from "react-icons/fa6";
import DeletePop from "./DeletePop";
import EditPop from "./EditPop";
import axios from "axios";
const imageURL = "http://localhost:3000/api/uploads/images/";

const selectPromote = [
  {
    id: "Sta",
    price: 500,
    label: "Standard Ad 500EGP",
  },
  {
    id: "Pro",
    price: 750,
    label: "Pro Ad 750EGP",
  },
  {
    id: "Pre",
    price: 1000,
    label: "Premium Ad 1000EGP",
  },
];
const PayPromote = [
  {
    name: "credit",
    placeholder: "XXXX XXXX XXXX XXXX",
    label: "Enter Your Credit Card Number",
    regex: /^\d{4}(?:\s\d{4}){3}$/,
    error: "Credit Card Number",
  },
  {
    name: "cvc",
    placeholder: "CVC/CVV",
    label: "CVC",
    regex: /^\d{3}$/,
    error: "CVC Number",
  },
  {
    name: "ex",
    placeholder: "MM/YY",
    label: "Expire Date",
    regex: /^(0[1-9]|1[0-2])\/(0[0-9]|1[0-9]|2[0-9]|3[0-9])$/,
    error: "Expire Date",
  },
  {
    name: "name",
    placeholder: "Name Of Credit Card",
    label: "Name",
    regex: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
    error: "Name",
  },
];

function SellerProductPage() {
  const [show, setShow] = useState(false);
  const [showPromote, setShowPromote] = useState(false);
  const [proName, setProName] = useState("");
  const [AdPrice, setAdPrice] = useState(0);
  const [pay, setPay] = useState(false);
  const [check, setCheck] = useState(false);
  const [edit, setEdit] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    credit: "",
    cvc: "",
    ex: "",
    name: "",
  });
  const [products, setProducts] = useState([]);
  const [id, setID] = useState("");

  async function getSellerProducts() {
    try {
      const response = await axios.get(
        "http://localhost:3000/seller/get-products" +
          "/" +
          localStorage.getItem("sellerToken")
      );
      setProducts(response.data);
    } catch (error) {}
  }

  useEffect(() => {
    getSellerProducts();
  }, []);

  function showPop() {
    if (show === true) {
      return <ProductPop />;
    }
  }

  function deletePop() {
    if (check === true) {
      return <DeletePop id={id} />;
    }
  }

  function editPop() {
    if (edit === true) {
      return <EditPop id={id} />;
    }
  }

  return (
    <main className="p-[20px] min-h-screen ">
      {showPop()}
      {deletePop()}
      {editPop()}

      <div className="flex justify-between align-center">
        <h3 className="text-[#3E64DA]">PRODUCTS</h3>
        <button
          className="block border-solid border-[#3E64DA] border-[1px] hover:border-[#F39E31] hover:text-[#F39E31] text-center w-[70px]  rounded-[5px] mb-[5px] text-[#3E64DA]"
          onClick={() => setShow(!show)}
        >
          Add
        </button>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {products.map((object, index) => {
          if (products != []) {
            return (
              <div key={index} className="bg-[#eee] p-2">
                <img
                  src={imageURL + object.images[0]}
                  alt=""
                  className="w-[100%] h-[200px] object-contain mb-[10px]"
                />
                <div className="flex items-center justify-between px-[6px]">
                  <div className="left self-start">
                    <h6 className="font-bold text-left text-[13px] mb-[10px] text-black">
                      {object.name}
                    </h6>
                    <h6 className="font-bold text-left text-[13px] mb-[10px] text-black">
                      {object.price} L.E
                    </h6>
                  </div>
                  <div className="right text-right">
                    <button
                      onClick={() => {
                        setShowPromote(true);
                        setProName(object.type);
                      }}
                      className=" text-[#3E64DA] text-center border-solid border-[#3E64DA] border-[1px] hover:border-[#F39E31] hover:text-[#F39E31] text-[15px] w-[70px] rounded-[5px] mb-[10px]"
                    >
                      Promote
                    </button>
                    <button
                      onClick={function () {
                        setCheck(!check);
                        setID(object._id);
                      }}
                      className="block text-[#3E64DA] text-center border-solid border-[#3E64DA] border-[1px] hover:border-[#F39E31] hover:text-[#F39E31] text-[15px] w-[70px]  rounded-[5px] mb-[10px] "
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        setEdit(!edit);
                        setID(object._id);
                      }}
                      className=" text-[#3E64DA] text-center border-solid border-[#3E64DA] border-[1px] hover:border-[#F39E31] hover:text-[#F39E31] text-[15px] w-[70px] rounded-[5px] "
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })}

        <div
          className={`${
            showPromote ? "" : "hidden"
          }  z-10  p-[15px] absolute border border-[black] border-solid-[1px] rounded-lg w-[50%] h-fit bg-[white] o top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}
        >
          <FaCircleXmark
            onClick={() => {
              setShowPromote(false);
            }}
            className="absolute right-[15px] top-[15px] cursor-pointer"
          />

          <form action="">
            <h1 className="font-bold mb-5">
              Select your promote for {proName}
            </h1>
            {selectPromote.map((obj, index) => {
              return (
                <div className="p-[5px] mb-5" key={index}>
                  <input
                    type="radio"
                    name="Promote"
                    id={obj.id}
                    required
                    className="mr-2"
                    onClick={() => {
                      setAdPrice(obj.price);
                    }}
                  />
                  <label htmlFor={obj.id}>{obj.label}</label>
                </div>
              );
            })}
            {AdPrice ? (
              ""
            ) : (
              <div className="text-[red] z-10 mb-2 p-[5px]">
                You must choose your promote
              </div>
            )}
            <button
              onClick={(e) => {
                e.preventDefault();
                if (AdPrice) {
                  setPay(true);
                  setShowPromote(false);
                }
              }}
              className="block bg-[#3E64DA] text-center text-[white] w-[100%] rounded-lg"
            >
              Confirm
            </button>
          </form>
        </div>
        {pay ? (
          <div className="z-10 border border-[black] border-solid-[1px] p-[15px] order-3 absolute rounded-lg w-[50%] h-fit bg-[white] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <FaCircleXmark
              onClick={() => {
                setPay(false);
              }}
              className="absolute right-[15px] top-[15px] cursor-pointer"
            />
            <form action="">
              {PayPromote.map((obj, index) => {
                return (
                  <div key={index} className="my-3">
                    <label htmlFor="credit" className="font-bold">
                      {obj.label}
                    </label>
                    <input
                      type="text"
                      name={obj.name}
                      id={obj.name}
                      onFocus={(e) => {
                        e.target.placeholder = "";
                      }}
                      onBlur={(e) => {
                        if (!e.target.value) {
                          e.target.placeholder = obj.placeholder;
                        }
                      }}
                      onChange={(e) => {
                        const value = e.target.value;
                        const check = obj.regex;
                        const name = e.target.name;
                        // Example regex for a simple email validation
                        const isValid = check.test(value);
                        setError(isValid ? "" : obj.error);
                        setData((prev) => {
                          return { ...prev, [name]: value };
                        });
                        if (!e.target.value) {
                          setError("");
                        }
                      }}
                      required
                      placeholder={obj.placeholder}
                      className="w-full rounded-lg outline-none border border-[#3E64DA] border-solid-[1px] p-[5px] text-[13px]"
                    />
                    {error === obj.error ? (
                      <div className="text-[13px] p-[5px] text-[red]">
                        Invalid {obj.error}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
              <button
                type="submit"
                onClick={() => {
                  if (data.credit && data.cvc && data.ex && data.name) {
                    setPay(false);
                  }
                  console.log(data);
                }}
                className="block w-full bg-[#3E64DA] p-[5px] text-white rounded-lg"
              >
                Complete Check
              </button>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
      {showPromote || pay ? (
        <div className=" w-full h-[100vh] absolute bg-black top-0 left-0 opacity-50"></div>
      ) : (
        ""
      )}
    </main>
  );
}
export default SellerProductPage;
