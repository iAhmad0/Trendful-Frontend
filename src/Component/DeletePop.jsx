import { useState } from 'react'
import { FaCircleXmark } from 'react-icons/fa6'
function DeletePop() {
  const [pop, setPop] = useState(true)
  return pop ? (
    <>
      <div
        onClick={() => setPop(false)}
        className="absolute w-full min-h-screen top-0 left-0 bg-black opacity-50"
      ></div>
      <div className="absolute text-[20px] rounded-[10px]  bg-white z-100  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5">
        <FaCircleXmark
          onClick={() => setPop(false)}
          className="absolute top-2 right-2 cursor-pointer text-[#3E64DA]"
        />
        <p className="text-[#3E64DA] p-5">
          Do You Want To Remove This Product ?
        </p>
        <div className="flex justify-around align-middle text-[#3E64DA]">
          <button
            onClick={() => setPop(false)}
            className=" border-solid border-[1px] border-[#3E64DA]  rounded-xl  py-1 px-2 hover:text-[#F39E31] hover:border-[#F39E31]"
          >
            Delete
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
export default DeletePop
