import SideBar from "../Components/SideBar";
import SellerProduct from "../Components/SellerProduct";
import { useState } from "react";
import axios from "axios";

function SellerProductPage() {
  const [render, setRender] = useState(false);

  function checkLoggedIn() {
    const send = async () => {
      try {
        const request = await axios.post(
          "http://localhost:3000/api/seller/token",
          {
            token: localStorage.getItem("sellerToken"),
          }
        );
        setRender(true);
      } catch (err) {
        localStorage.removeItem("sellerToken");
        window.location.href = "http://localhost:5173/seller/login";
      }
    };
    send();
  }

  checkLoggedIn();
  if (render) {
    return (
      <div className="flex min-h-screen">
        <SideBar />

        <div className="flex-1">
          <SellerProduct />
        </div>
      </div>
    );
  }
}
export default SellerProductPage;
