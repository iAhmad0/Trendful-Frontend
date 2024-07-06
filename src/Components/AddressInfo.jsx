import { useState } from 'react'

const address = [
  { type: 'text', Abstract: 'First Name*', id: 'fname' },
  { type: 'text', Abstract: 'Last Name*', id: 'lname' },
  { type: 'email', Abstract: 'Email Address*', id: 'email' },
  { type: 'text', Abstract: 'Telephone*', id: 'telephone' },
  { type: 'text', Abstract: 'Address', id: 'address' },
  { type: 'text', Abstract: 'Town', id: 'town' },
  { type: 'text', Abstract: 'Country', id: 'country' },
  { type: 'text', Abstract: 'Postal Code', id: 'Pcode' },
]

function AddressInfo() {
  const [data, setData] = useState({
    fname: '',
    lname: '',
    email: '',
    telephone: '',
    address: '',
    town: '',
    country: '',
    Pcode: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => {
      return { ...prev, [name]: value }
    })
  }
  return (
    <div className="border-[1px] border-solid  border-[gray] rounded-[10px] mr-[10px] text-[15px] p-[5px] w-[100%]">
      <h1 className="mb-[5px] ml-[10px]">
        BILLING ADDRESS{' '}
        <span className="text-[10px] text-red-700">Required Field*</span>
      </h1>
      {address.map((object, index) => {
        return (
          <input
            onChange={handleChange}
            key={index}
            onFocus={(e) => {
              e.target.placeholder = ''
            }}
            onBlur={(e) => {
              if (!e.target.value) {
                e.target.placeholder = address[index].Abstract
              }
            }}
            name={object.id}
            type={object.type}
            required
            placeholder={object.Abstract}
            className={`bg-[#eee] rounded-[3px] ml-[10px] my-2  ${
              index < 2 ? 'w-[220px]' : 'w-[460px]'
            } w-[220px] ${
              index === 0 ? 'mr-[10px]' : ''
            } p-[5px] outline-none text-[13px] placeholder:text-[gray]`}
          />
        )
      })}
      {data.Pcode &&
      data.address &&
      data.country &&
      data.fname &&
      data.lname &&
      data.telephone &&
      data.town &&
      data.email ? (
        ''
      ) : (
        <div className="text-[13px] text-[red] p-[5px] ml-[10px]">
          You Must fill this Form
        </div>
      )}
    </div>
  )
}
export default AddressInfo
