import { useState } from 'react'
import { setGlobalState } from '../globalStates'

function SelectShipping() {
  const [data, setData] = useState({
    ship: '',
  })
  return (
    <div className="py-[10px] w-[49%]">
      <h1 className="font-bold">Select Shipping Method</h1>
      <div>
        <div className="my-2">
          <input
            required
            type="radio"
            name="ship"
            value="50"
            id="one"
            onClick={(e) => {
              const { name, value } = e.target
              setData((prev) => {
                return { ...prev, [name]: value }
              })
              setGlobalState('shipping', 50)
            }}
          />
          <label htmlFor="one" className="ml-[10px]">
            Standard Shipping 50EGP
          </label>
        </div>
        <div className="my-2">
          <input
            required
            type="radio"
            name="ship"
            id="two"
            value="100"
            onClick={(e) => {
              const { name, value } = e.target
              setData((prev) => {
                return { ...prev, [name]: value }
              })
              setGlobalState('shipping', 100)
            }}
          />
          <label htmlFor="two" className="ml-[10px]">
            Express Shipping 100EGP
          </label>
          {data.ship ? (
            ''
          ) : (
            <div className="text-[13px] text-[red] p-[5px] ml-[10px]">
              You Must fill this Form
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default SelectShipping
