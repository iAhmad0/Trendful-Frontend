const inventory = [
  {
    price: "250L.E",
    type: "Watch",
    img: "../../public/Image/product-1.jpg",
    capacity: 5,
  },
  {
    price: "850L.E",
    type: "Smart Watch",
    img: "../../public/Image/product-2.jpg",
    capacity: 2,
  },
  {
    price: "1250L.E",
    type: "Power Bank",
    img: "../../public/Image/product-3.jpg",
    capacity: 10,
  },
  {
    price: "1250L.E",
    type: "Ear Buds",
    img: "../../public/Image/product-4.jpg",
    capacity: 15,
  },
];
function Inventory() {
  return (
    <main className="flex-1 p-[20px] text-white">
      <div className="flex justify-between">
        <h3 className="text-[#3E64DA]">INVENTORY</h3>
      </div>
      <table className=" bg-[#eee] w-[100%] border-collapse border  my-[15px] mt-[20px] border-[black]">
        <tr className=" text-[white] w-[25%] text-center bg-[#3E64DA] h-[60px] border-collapse border border-[black]">
          <th className="">Photo</th>
          <th className="">Name</th>
          <th className="">Price</th>
          <th>Capacity</th>
        </tr>
        {inventory.map((object) => {
          return (
            <tr className="text-[black] w-[25%] text-center border-collapse border border-[black]">
              <td className="w-[25%]">
                <img src={object.img} alt="" className="w-[100%]" />
              </td>
              <td className="w-[25%] text-center">{object.type}</td>
              <td className="w-[25%] text-center">{object.price}</td>
              <td className="w-[25%] text-center ">{object.capacity}</td>
            </tr>
          );
        })}
      </table>
    </main>
  );
}
export default Inventory;
