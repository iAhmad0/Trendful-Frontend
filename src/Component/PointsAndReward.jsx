import { useState } from 'react'
import { MdContentCopy } from 'react-icons/md'

function PointsAndReward() {
  const data = [
    {
      itemName: 'Headphone',
      price: 200,
      img: '../public/images/headphones.jpg ',
      quantity: 6,
    },
    {
      itemName: 'Headphone',
      price: 200,
      img: '../public/images/headphones.jpg ',
      quantity: 6,
    },
  ]
  let totalPoints = 0
  const [selectedOption, setSelectedOption] = useState('')
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }
  const [code, setCode] = useState('')
  return (
    <div className="flex  justify-center mt-[10px]">
      <div className=" p-[10px] w-[700px] mr-10 ">
        {data.map(({ itemName, price, img, quantity }, index) => {
          totalPoints += quantity * price
          return (
            <div
              key={index}
              className=" flex items-center mb-[15px] relative border border-gray-300 border-1 p-[10px] rounded-lg"
            >
              <img src={img} alt="" className="w-[200px]" />
              <div className="p-[10px]">
                <p className="p-[10px]">Name : {itemName}</p>
                <p className="p-[10px]">Quantity : {quantity}</p>
                <p className="p-[10px]">Points : {price}</p>
              </div>
            </div>
          )
        })}
        <div className="">
          Total Points : <span>{totalPoints}</span>
        </div>
      </div>
      <div className="border border-gray-300 border-1 mt-[10px] p-[10px] h-[378px] w-[200px] flex flex-col pl-5 rounded-lg">
        <div className="mb-6 flex justify-center align-middle gap-1">
          <input
            id="500"
            type="radio"
            checked={selectedOption === '500'}
            value="500"
            onChange={handleOptionChange}
            onClick={() => setCode('TrendFull50')}
          />
          <label htmlFor="500" className="flex-1">
            500 points
          </label>
        </div>
        <div className="mb-6 flex justify-center align-middle gap-1">
          <input
            id="1000"
            type="radio"
            checked={selectedOption === '1000'}
            value="1000"
            onChange={handleOptionChange}
            onClick={() => setCode('TrendFull100')}
          />
          <label htmlFor="1000" className="flex-1">
            1000 points
          </label>
        </div>
        <div className="mb-[40px] flex justify-center align-middle gap-1">
          <input
            type="radio"
            checked={selectedOption === '1500'}
            value="1500"
            onChange={handleOptionChange}
            id="1500"
            onClick={() => setCode('TrendFull150')}
          />
          <label htmlFor="1500" className="flex-1">
            1500 points
          </label>
        </div>
        <div className=" flex items-center mb-[30px]">
          <div className="bg-gray-200 w-[120px] h-[44px] mr-3 code flex items-center justify-center">
            {code}
          </div>
          <MdContentCopy
            className="text-[18px] cursor-pointer"
            onClick={(e) => {
              navigator.clipboard.writeText(
                document.querySelector('.code').textContent
              )
              e.target.style.cursor = 'grab'
              setTimeout(() => {
                e.target.style.cursor = 'pointer'
              }, 70)
            }}
          />
        </div>
      </div>
    </div>
  )
}
export default PointsAndReward
