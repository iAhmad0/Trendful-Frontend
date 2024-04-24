const products = [
  {
    price: "250L.E",
    type: "Watch",
    img: "../../public/Image/product-1.jpg",
  },
  {
    price: "850L.E",
    type: "Smart Watch",
    img: "../../public/Image/product-2.jpg",
  },
  {
    price: "1250L.E",
    type: "Power Bank",
    img: "../../public/Image/product-3.jpg",
  },
  {
    price: "1250L.E",
    type: "Ear Buds",
    img: "../../public/Image/product-4.jpg",
  },
  {
    price: "350L.E",
    type: "Analog Watch with more Feature",
    img: "../../public/Image/product-1.jpg",
  },
  {
    price: "750L.E",
    type: "Analog and DIgital Watch",
    img: "../../public/Image/product-2.jpg",
  },
];

function Products() {
  return (
    <main className="flex-1 p-[20px] text-white">
      <div className="flex justify-between align-center">
        <h3 className="text-[#3E64DA]">PRODUCTS</h3>
        <button className="block bg-green-500 w-[70px]  rounded-[5px] mb-[5px]">
          add
        </button>
      </div>
      <div className=" flex my-[15px] justify-between flex-wrap">
        {products.map((object) => {
          return (
            <div className="w-[32%] bg-[#eee] mb-[10px] p-[5px]">
              <img src={object.img} alt="" className="w-[100%] mb-[10px]" />
              <div className="flex items-center justify-between px-[6px]">
                <div className="left self-start">
                  <h6 className="font-bold text-left text-[13px] mb-[7px] text-black">
                    {object.type}
                  </h6>
                  <h6 className="font-bold text-left text-[13px] mb-[7px] text-black">
                    {object.price}
                  </h6>
                  <a
                    href=""
                    className=" text-blue-700 text-[13px] hover:text-blue-400 block  "
                  >
                    SeeMore
                  </a>
                </div>
                <div className="right">
                  <button className="block bg-red-500 w-[50px] rounded-[5px] mb-[10px]">
                    delete
                  </button>
                  <button className=" bg-blue-500 w-[50px] m rounded-[5px]">
                    edit
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
export default Products;
