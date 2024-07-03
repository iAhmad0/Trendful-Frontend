import { Link } from "react-router-dom";

function Product({ img, price, name, link }) {
  return (
    <div className="w-[19%] mr-[1%]">
      <Link to={"product/" + link}>
        <img
          src={img}
          alt=""
          className="mb-[10px] max-w-full max-h-full h-[200px] w-full"
        />
      </Link>
      <h6 className="font-bold text-left text-[13px] mb-[10px]">{name}</h6>
      <div className="flex justify-end">
        <h6 className="font-bold text-left text-[13px] mb-[5px]">
          EGP {price}
        </h6>
      </div>
    </div>
  );
}
export default Product;
