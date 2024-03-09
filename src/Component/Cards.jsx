import { Link } from 'react-router-dom'
function Cards({ img1, img2, img3, img4 }) {
  return img2 != null ? (
    <div className="bg-white w-[24.5%] p-[10px]">
      <h1 className="font-bold text-left mb-[10px]">Show Today offer</h1>
      <h3 className="font-bold text-left mb-[10px]">Shopping</h3>
      <div className="flex justify-between flex-wrap mb-[30px]">
        <img
          src={img1}
          alt=""
          className="w-[48%] h-[80px] mb-[10px] cursor-pointer"
        />
        <img
          src={img2}
          alt=""
          className="w-[48%] h-[80px] mb-[10px] cursor-pointer"
        />
        <img
          src={img3}
          alt=""
          className="w-[48%] h-[80px] mb-[10px] cursor-pointer"
        />
        <img
          src={img4}
          alt=""
          className="w-[48%] h-[80px] mb-[10px] cursor-pointer"
        />
      </div>
      <Link to="product">
        <a
          href=""
          className="float-right text-blue-700 text-[13px] hover:text-blue-800"
        >
          SeeMore
        </a>
      </Link>
    </div>
  ) : (
    <div className="bg-white w-[23%] p-[10px]">
      <h1 className="font-bold text-left mb-[10px]">Show Today offer</h1>
      <h3 className="font-bold text-left mb-[10px]">Shopping</h3>
      <img
        src={img1}
        alt=""
        className="w-[100%] h-[180px] mb-[30px] cursor-pointer"
      />
      <a
        href=""
        className="float-right text-blue-700 text-[13px] hover:text-blue-800"
      >
        SeeMore
      </a>
    </div>
  )
}

export default Cards
