import axios from "axios";
import { useState, useEffect } from "react";

const OptionBox = ({
  title,
  type,
  placeholder,
  isSelected,
  map,
  name,
  handleCh,
}) => {
  const [files, setFiles] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/categories"
        );
        setCategories(response.data);
      } catch (error) {}
    };
    getCategories();
  }, []);

  function handleChange(e) {
    const selectedFile = e.target.files;
    setFiles(selectedFile);

    handleCh(selectedFile);
  }

  return (
    <div className=" mb-[10px]">
      <label
        className={` block text-[#3E64DA] mb-[5px] ${
          title === "Name" ? "mt-[10px]" : ""
        }`}
      >
        {title}
      </label>
      {map ? (
        <input
          onChange={(e) => handleChange(e)}
          multiple
          type={type}
          accept=".png, .jpg, .jpeg"
          placeholder={placeholder}
          className={`outline-none hover:border-[#F39E31] text-xs rounded-[5px] ${
            type !== "file" ? "border border-[#3E64DA] border-solid" : ""
          }  ${type === "number" ? "w-[100%]" : "w-[100%]"} pl-3`}
          name={name}
        />
      ) : type ? (
        <input
          multiple
          type={type}
          placeholder={placeholder}
          className={`outline-none hover:border-[#F39E31]  rounded-[5px] ${
            type !== "file" ? "border border-[#3E64DA] border-solid" : ""
          }  ${type === "number" ? "w-[100%]" : "w-[100%]"}   pl-3`}
          min="0"
          onFocus={(e) => {
            if (type === "text" || type === "number") e.target.placeholder = "";
          }}
          onBlur={(e) => {
            if (type === "text" || type === "number")
              e.target.placeholder = placeholder;
            else e.target.value = "";
          }}
          onChange={handleCh}
          name={name}
        />
      ) : isSelected ? (
        <select
          onChange={handleCh}
          name="category"
          className=" p-[5px] border border-[#3E64DA] rounded-[5px] border-solid outline-none hover:border-[#F39E31]"
        >
          {categories.map((option, index) => {
            return (
              <option key={index} value={option.name}>
                {option.name}
              </option>
            );
          })}
        </select>
      ) : (
        <textarea
          onChange={handleCh}
          className="w-full h-[100px]  block outline-none rounded-[5px] hover:border-[#F39E31]  border border-[#3E64DA] border-solid pl-2 resize-none "
          name={name}
          id=""
          placeholder={placeholder}
          onFocus={(e) => {
            e.target.placeholder = "";
          }}
          onBlur={(e) => {
            e.target.placeholder = placeholder;
          }}
        ></textarea>
      )}
      <div className="">
        {[...files].map((element, index) => {
          return <div key={index}>{element.name}</div>;
        })}
      </div>
    </div>
  );
};

export default OptionBox;
