import { useState } from 'react'
import { FaCircleXmark } from 'react-icons/fa6'
import OptionBox from './OptionBox'

const editObj = {
  name: '',
  price: '',
  des: '',
  photo: '',
}

function EditPop() {
  const [pop, setPop] = useState(true)
  return pop ? (
    <>
      <div
        onClick={() => setPop(false)}
        className="absolute w-full min-h-screen top-0 left-0 bg-black opacity-50 "
      ></div>
      <div className="absolute text-[15px] max-h-[90%] overflow-auto rounded-[10px]  bg-white z-100  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5">
        <FaCircleXmark
          onClick={() => setPop(false)}
          className="absolute top-2 right-2 cursor-pointer text-[#3E64DA]"
        />
        <p className="text-[#3E64DA] p-2 text-center">Edit Page</p>
        {/* <form action="" className="text-[15px]">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name=""
            id="name"
            placeholder="Enter New Name"
            onChange={(e) => {
              editObj.name = e.target.value
            }}
            className="w-full my-2 block outline-none border-solid border-[1px] border-[#3E64DA]  rounded-xl  py-1 px-2 hover:text-[#F39E31] hover:border-[#F39E31]"
          />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name=""
            id="price"
            placeholder="00.0 L.E"
            onChange={(e) => {
              editObj.price = e.target.value
            }}
            className="w-full my-2 block outline-none border-solid border-[1px] border-[#3E64DA]  rounded-xl  py-1 px-2 hover:text-[#F39E31] hover:border-[#F39E31]"
          />
          <label htmlFor="des">Description</label>
          <textarea
            name=""
            id="des"
            placeholder="Enter New Description"
            onChange={(e) => {
              editObj.des = e.target.value
            }}
            className="my-2 w-full block outline-none border-solid border-[1px] border-[#3E64DA]  rounded-xl  py-1 px-2 hover:text-[#F39E31] hover:border-[#F39E31]"
          ></textarea>
          <label htmlFor="image">Add Image</label>
          <input
            type="file"
            name=""
            id="image"
            className="my-2 block"
            onChange={(e) => {
              editObj.photo = e.target.value
            }}
          />
        </form> */}
        <OptionBox title="Name" type="text" placeholder="Enter New Name" />
        <OptionBox title="Price" type="number" placeholder="00.0 L.E" />
        <OptionBox
          title="Quantity"
          type="number"
          placeholder="Enter New Quantity"
        />
        <OptionBox
          title="Description"
          placeholder="Enter New Description at least 10 character"
        />
        <OptionBox
          title="Choose Images (at least 1 image)"
          type="file"
          map="map"
        />
        <div className="flex justify-around align-middle py-2 text-[15px] text-[#3E64DA]">
          <button
            onClick={() => {
              setPop(false)
              console.log(editObj)
            }}
            className=" border-solid border-[1px] border-[#3E64DA]  rounded-xl  py-1 px-2 hover:text-[#F39E31] hover:border-[#F39E31]"
          >
            Edit
          </button>
          <button
            onClick={() => setPop(false)}
            className=" border-solid border-[1px] border-[#3E64DA]  rounded-xl  py-1 px-2 hover:text-[#F39E31] hover:border-[#F39E31]"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  ) : (
    ''
  )
}
export default EditPop
