import SideBar from "../Components/SideBar";
import SellerAccount from "../Components/SellerAccount";
import { useState } from "react";
import axios from "axios";

function SellerAccountPage() {
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
          <SellerAccount />
        </div>
      </div>
    );
  }
}
export default SellerAccountPage;
