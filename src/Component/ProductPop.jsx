import { useState } from 'react'
import OptionBox from './OptionBox'
import { IoIosArrowBack } from 'react-icons/io'

const ProductPop = () => {
  const [pop, setPop] = useState(true)
  return pop ? (
    <>
      <div
        className="absolute w-full min-h-screen left-0 top-0 bg-black bg-opacity-50"
        onClick={() => setPop(false)}
      ></div>
      <div className="absolute text-[20px] rounded-[10px]  bg-white z-100  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5">
        <IoIosArrowBack
          className="absolute text-[#3E64DA] top-[6px] left-[10px] cursor-pointer"
          onClick={() => setPop(false)}
        />
        <div className="text-base">
          <OptionBox
            title="Name"
            type="text"
            placeholder="Enter product name"
          />
          <OptionBox title="Description" placeholder="at least 10 characters" />
          <OptionBox title="Price" type="number" />
          <OptionBox title="Quantity" type="number" />
          <OptionBox title="Category" isSelected={true} />
          {/* Image */}
          <OptionBox
            title="Choose Images (at least 1 image)"
            type="file"
            map="map"
          />
          <div className="flex justify-center">
            <button className="block border-solid text-base px-4 py-1 mt-4 border-[#3E64DA] border-[1px] hover:border-[#F39E31] hover:text-[#F39E31] text-center  rounded-[5px] mb-[5px] text-[#3E64DA]">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    ''
  )
}

export default ProductPop
