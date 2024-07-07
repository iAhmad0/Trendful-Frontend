import { useState } from "react";

const address = [
  { type: "text", Abstract: "First Name*", id: "firstName" },
  { type: "text", Abstract: "Last Name*", id: "lastName" },
  { type: "email", Abstract: "Email Address*", id: "email" },
  { type: "text", Abstract: "Phone*", id: "phone" },
  { type: "text", Abstract: "Address*", id: "address" },
  { type: "text", Abstract: "City*", id: "city" },
];

function AddressInfo({ handleInfo }) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  return (
    <div className="border-[1px] border-solid  border-[gray] rounded-[10px] mr-[10px] text-[15px] p-[5px] w-[100%]">
      <h1 className="mb-[5px] ml-[10px]">
        BILLING ADDRESS{" "}
        <span className="text-[10px] text-red-700">Required Field*</span>
      </h1>
      {address.map((object, index) => {
        return (
          <input
            onChange={(e) => handleInfo(e)}
            key={index}
            onFocus={(e) => {
              e.target.placeholder = "";
            }}
            onBlur={(e) => {
              if (!e.target.value) {
                e.target.placeholder = address[index].Abstract;
              }
            }}
            name={object.id}
            type={object.type}
            required
            placeholder={object.Abstract}
            className={`bg-[#eee] rounded-[3px] ml-[10px] my-2  ${
              index < 2 ? "w-[220px]" : "w-[460px]"
            } w-[220px] ${
              index === 0 ? "mr-[10px]" : ""
            } p-[5px] outline-none text-[13px] placeholder:text-[gray]`}
          />
        );
      })}
      {data.Pcode &&
      data.address &&
      data.country &&
      data.fname &&
      data.lname &&
      data.phone &&
      data.town &&
      data.email ? (
        ""
      ) : (
        <div className="text-[13px] text-[red] p-[5px] ml-[10px]">
          You must fill this Form
        </div>
      )}
    </div>
  );
}
export default AddressInfo;
