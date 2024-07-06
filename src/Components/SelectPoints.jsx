import { useState } from 'react'
import { MdContentCopy } from 'react-icons/md'
function SelectPoints() {
  const [code, setCode] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }
  return (
    <>
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
    </>
  )
}
export default SelectPoints
