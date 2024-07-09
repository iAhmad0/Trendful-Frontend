import { Link } from "react-router-dom";
const imageURL = "http://localhost:3000/api/uploads/images/";

function Product({ img, price, name, link }) {
  return (
    <div className="border rounded-lg p-2">
      <div className="flex justify-center items-center h-[200px] mb-3">
        <Link to={"product/" + link}>
          <img
            src={imageURL + img}
            alt=""
            className="max-w-full max-h-[200px] w-full"
          />
        </Link>
      </div>
      <div>
        <h6 className="font-bold text-[13px] leading-none">{name}</h6>
        <h6 className="font-bold text-right text-[13px] mt-5">EGP {price}</h6>
      </div>
    </div>
  );
}
export default Product;
