import { useRef, useState } from 'react'
const options = ['cat', 'cat', 'cat', 'cat']
const OptionBox = ({
  title,
  type,
  placeholder,
  isSelected,
  map,
  name,
  handleCh,
}) => {
  const [files, setFiles] = useState([])
  //const fileInput = useRef(null)
  //const [urls, setUrls] = useState([])
  function handleChange(e) {
    // console.log(e.target.files[0].name)
    // console.log(e.target.value)
    // setFiles([...files, ...e.target.files])
    const selectedFile = Array.from(e.target.files)
    setFiles(selectedFile)

    handleCh(selectedFile)
    //setUrls(files.map((file) => URL.createObjectURL(file)))
    //console.log(files)
  }

  return (
    <div className=" mb-[10px]">
      <label
        className={` block text-[#3E64DA] mb-[5px] ${
          title === 'Name' ? 'mt-[10px]' : ''
        }`}
      >
        {title}
      </label>
      {map ? (
        <input
          onChange={(e) => handleChange(e)}
          multiple
          type={type}
          placeholder={placeholder}
          className={`outline-none hover:border-[#F39E31] text-xs rounded-[5px] ${
            type !== 'file' ? 'border border-[#3E64DA] border-solid' : ''
          }  ${type === 'number' ? 'w-[100%]' : 'w-[100%]'} pl-3`}
          name={name}
        />
      ) : type ? (
        <input
          multiple
          type={type}
          placeholder={placeholder}
          className={`outline-none hover:border-[#F39E31]  rounded-[5px] ${
            type !== 'file' ? 'border border-[#3E64DA] border-solid' : ''
          }  ${type === 'number' ? 'w-[100%]' : 'w-[100%]'}   pl-3`}
          min="0"
          onFocus={(e) => {
            if (type === 'text' || type === 'number') e.target.placeholder = ''
          }}
          onBlur={(e) => {
            if (type === 'text' || type === 'number')
              e.target.placeholder = placeholder
            else e.target.value = ''
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
          {options.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            )
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
            e.target.placeholder = ''
          }}
          onBlur={(e) => {
            e.target.placeholder = placeholder
          }}
        ></textarea>
      )}
      <div className="">
        {files.map((element, index) => {
          return <div key={index}>{element.name}</div>
        })}
      </div>
    </div>
  )
}

export default OptionBox
