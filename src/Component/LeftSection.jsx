import { useEffect, useState } from "react";

const LeftSection = (prop) => {
  const [currentImage, setCurrentImage] = useState();
  const images = Object.values(prop);

  return (
    <div className="w-[30%] mr-[30px] ">
      <div className="flex sticky top-0">
        <u className="list-none mr-3">
          {images.map((img, index) => {
            return (
              <li
                className="w-[50px] mb-2 border-solid border-black border rounded-md overflow-hidden cursor-pointer image-item"
                key={index + 1}
              >
                <img
                  src={img}
                  alt=""
                  onMouseOver={() => {
                    setCurrentImage(img);
                  }}
                />
              </li>
            );
          })}
        </u>
        <img className="w-[100%] overflow-hidden" src={currentImage} alt="" />
      </div>
    </div>
  );
};
export default LeftSection;
