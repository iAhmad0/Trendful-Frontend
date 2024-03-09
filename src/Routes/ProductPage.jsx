import PricingSection from "../Component/PricingSection";
import MiddleSection from "../Component/MiddleSection";
import LeftSection from "../Component/LeftSection";
import Header from "../Component/Header";
import ErrorPage from "./ErorrPage";
import { useEffect, useState } from "react";
import axios from "axios";

let result = false;

function ProductPage() {
  const id = window.location.pathname;

  const [render, setRender] = useState(true);
  const [buyer, setBuyer] = useState("sign in");
  const [data, setData] = useState([]);

  function check() {
    const send = async () => {
      const request = await axios.post(
        "http://localhost:3000/api/buyer/token",
        {
          token: localStorage.getItem("token"),
        }
      );
      setTimeout(() => {
        result = request.data.valid;

        if (result) {
          setBuyer(request.data.name);
        } else {
          localStorage.removeItem("token");
        }
      }, 500);
    };
    send();
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/" +
            id.substring(id.lastIndexOf("/") + 1)
        );
        setData(response.data);
        setRender(true);
      } catch (err) {
        setRender(false);
      }
    };
    fetchData();
  }, []);

  if (render) {
    return (
      <>
        <Header name={buyer} />
        <div className="flex p-[15px]">
          <LeftSection {...data.images} />
          <MiddleSection
            price={data.price}
            name={data.name}
            description={data.description}
          />
          <PricingSection price={data.price} quantity={data.quantity} />
        </div>
        {check()}
      </>
    );
  } else {
    return <ErrorPage />;
  }
}
export default ProductPage;
