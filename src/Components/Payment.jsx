import { useState } from 'react'
import AddressInfo from './AddressInfo'
import BankInfo from './BankInfo'
import SelectShipping from './SelectShipping'
import { useGlobalState } from '../globalStates'
import SelectPayment from './SelectPayment'
import PromoCode from './PromoCode'

const Payment = () => {
  const shipping = useGlobalState('shipping')[0]
  const credit = useGlobalState('credit')[0]
  const discount = useGlobalState('discount')[0]
  const [total, setTotal] = useState(localStorage.getItem('total'))

  const items = localStorage.getItem('toBuyItem').includes('[')
    ? JSON.parse(localStorage.getItem('toBuyItem'))
    : localStorage.getItem('toBuyItem')

  const itemsQuan = JSON.parse(localStorage.getItem('itemsQuantities'))
  let str = ''
  if (Array.isArray(items))
    items.forEach(function (item, i) {
      i !== items.length - 1
        ? (str += `${item}:${itemsQuan[i]}:`)
        : (str += `${item}:${itemsQuan[i]}`)
    })
  else str = `${items}:1`
  const newStr = str.split(':')
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="  p-[10px] w-[80%] mx-auto mt-[10px]">
        <img src="/public/images/favicon.png" alt="" className="mx-auto my-4" />
        <h1 className="font-bold my-1">CHECKOUT</h1>
        <div className="flex justify-around">
          <AddressInfo />
          <div className={`w-[49%] ${credit}`}>
            <BankInfo />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <SelectShipping />
          <SelectPayment />
        </div>
        <PromoCode />
        <div className="border-y-solid  border-y-slate-500  border-y-[3px]">
          <h1 className="w-fit mx-auto font-bold">Invoice</h1>
          {newStr.map((ele) => {
            if (Number(ele)) {
              return (
                <div className="flex items-center justify-between p-[5px]">
                  <p>Quantity</p>
                  <p>{ele}</p>
                </div>
              )
            } else {
              return (
                <div className="flex items-center justify-between p-[5px]">
                  <p>items</p>
                  <p>{ele}</p>
                </div>
              )
            }
          })}
          <div className="flex items-center justify-between p-[5px]">
            <p>Total Cost</p>
            <div>
              <p className={`${discount ? 'line-through' : ''}`}>{total}</p>
              {discount ? (
                <p className="text-right no-underline	 ">{total - discount}</p>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="flex items-center justify-between p-[5px]">
            <p>Shipping Cost</p>
            <p>{shipping}</p>
          </div>
        </div>
        <div className="flex items-center justify-between font-bold my-[10px]">
          <p>TOTAL</p>
          <p>{Number(total) + shipping - discount} EGP</p>
        </div>
        <button
          type="submit"
          className="w-[100%] text-center bg-[#3E64DA] py-[10px] rounded-[10px] font-bold p-[5px] text-white"
        >
          Complete Check
        </button>
      </div>
    </form>
  )
}
export default Payment
