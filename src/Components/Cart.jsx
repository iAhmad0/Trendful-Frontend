import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const imageURL = "http://localhost:3000/api/uploads/images/";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState({});

  function increaseQuantity(id) {
    const cart = JSON.parse(localStorage.getItem("cart"));

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == id) {
        cart[i].quantity++;
        window.location.reload();
        break;
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function decreaseQuantity(id) {
    const cart = JSON.parse(localStorage.getItem("cart"));

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == id && cart[i].quantity > 0) {
        cart[i].quantity--;
        window.location.reload();
        break;
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function removeProduct(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart = cart.filter((product) => product.id != id);

    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
  }

  useEffect(() => {
    const fetchData = async () => {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const products = [];

      if (cart.length) {
        for (let i = 0; i < cart.length; i++) {
          const response = await axios.get(
            "http://localhost:3000/api/v1/" + cart[i].id
          );

          const product = response.data;

          const info = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: cart[i].quantity,
            images: product.images,
          };

          products.push(info);
          setQuantity({ ...quantity, i: cart[i].quantity });
        }

        setCartProducts(products);

        let sum = 0;
        products.forEach((product) => {
          sum += product.price * product.quantity;
        });

        setTotal(sum);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="w-[700px]  absolute left-[50%] top-[25%] transform translate-x-[-50%] ">
        {cartProducts.map((product) => {
          return (
            <div
              key={product.id}
              className="flex justify-between items-center mb-[15px] border border-gray-300 border-1 p-[10px] rounded-lg"
            >
              <img src={imageURL + product.images[0]} alt="" className="h-32" />
              <span className="border border-gray-300 border-1 text-[25px]">
                <span
                  className="border-r border-grey-300 px-[10px] py-[6px] cursor-pointer text-gray-400"
                  onClick={() => decreaseQuantity(product.id)}
                >
                  -
                </span>
                <span className="p-[10px]">{product.quantity}</span>
                <span
                  className="border-l-[1px] border-grey-300 px-[10px] py-[6px] cursor-pointer text-gray-400"
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </span>
              </span>

              <div>
                <p className="text-[20px]">{product.name}</p>
                <p className="text-[15px] text-gray-500 mb-[15px]">
                  {product.price * product.quantity}
                </p>
                <button
                  className="border border-red-300 border-1 px-[5px] py-[7px] hover:bg-red-500 hover:text-[white] transition duration-300  linear "
                  onClick={() => {
                    removeProduct(product.id);
                  }}
                >
                  Remove Item
                </button>
              </div>
            </div>
          );
        })}

        {cartProducts.length > 0 ? (
          <div className="flex  justify-between p-[10px]  ">
            <div>
              <span>Total: {total}</span>
              <span></span>
            </div>
            <Link to="/checkout">
              <button
                onClick={() => {
                  localStorage.setItem("total", total);
                }}
                className="border border-green-300 border-1 px-[5px] py-[7px] hover:bg-green-500 hover:text-[white] transition duration-300  linear"
              >
                Purchase
              </button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>

      {cartProducts.length === 0 ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="w-[100px] h-[70px] "
          />
          <p className="mt-3 text-center text-gray-500">Cart is empty</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Cart;
