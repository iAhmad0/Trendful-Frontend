import { Link } from "react-router-dom";
const imageURL = "http://localhost:3000/api/uploads/images/";

function Product({ img, price, name, link }) {
  return (
    <div className="">
      <Link to={"product/" + link}>
        <img
          src={imageURL + img}
          alt=""
          className="mb-2 max-w-full max-h-full h-[200px] w-full"
        />
      </Link>
      <div className="flex justify-between">
        <h6 className="font-bold text-left text-[13px]">{name}</h6>
        <h6 className="font-bold text-left text-[13px] mt-5">EGP {price}</h6>
      </div>
    </div>
  );
}
export default Product;
