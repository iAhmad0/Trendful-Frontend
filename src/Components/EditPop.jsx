import { useState } from 'react'
import { FaCircleXmark } from 'react-icons/fa6'
import OptionBox from './OptionBox'

function EditPop() {
  const [pop, setPop] = useState(true)
  const [data, setData] = useState({
    name: '',
    quantity: '',
    price: '',
    photo: '',
    description: '',
  })
  function handleChange(e) {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    console.log(data)
  }
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
        <form onSubmit={handleSubmit}>
          <OptionBox
            title="Name"
            type="text"
            placeholder="Enter New Name"
            name="name"
            handleCh={handleChange}
          />
          <OptionBox
            title="Price"
            type="number"
            placeholder="00.0 L.E"
            name="price"
            handleCh={handleChange}
          />
          <OptionBox
            title="Quantity"
            type="number"
            placeholder="Enter New Quantity"
            name="quantity"
            handleCh={handleChange}
          />
          <OptionBox
            title="Description"
            placeholder="Enter New Description at least 10 character"
            name="description"
            handleCh={handleChange}
          />
          <OptionBox
            title="Choose Images (at least 1 image)"
            type="file"
            map="map"
            name="photo"
            handleCh={(photo) => {
              setData({
                ...data,
                photo: photo,
              })
            }}
          />
          <div className="flex justify-around align-middle py-2 text-[15px] text-[#3E64DA]">
            <button
              type="submit"
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
        </form>
      </div>
    </>
  ) : (
    ''
  )
}
export default EditPop
