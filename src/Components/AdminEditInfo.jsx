import { useState } from 'react'
import { setGlobalState } from '../globalStates'
function AdminEditInfo({ prop }) {
  console.log(prop)
  const [data, setData] = useState({
    account: '',
    name: '',
    phone: '',
    password: '',
  })
  const handleSubmit = function (e) {
    e.preventDefault()
    console.log(data)
    setGlobalState('PopInfo', false)
  }
  const handleChange = function (e) {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="font-light w-[49%]  mb-[10px] p-[10px] text-[black] rounded-[5px] border-[1px] border-solid border-[#3E64DA]"
    >
      <label htmlFor="email" className="block my-2 font-bold">
        Email
      </label>
      <input
        required
        onFocus={(e) => {
          e.target.placeholder = ''
        }}
        onBlur={(e) => {
          if (e.target.value === '') e.target.placeholder = prop.account
        }}
        onChange={handleChange}
        className="p-2 border-solid border-[1px] border-[#3E64DA] hover:border-[#F39E31] w-full rounded-lg"
        type="email"
        name="account"
        id="email"
        value={prop.account}
      />
      <label htmlFor="name" className="block my-2 font-bold">
        Name
      </label>
      <input
        required
        onChange={handleChange}
        onFocus={(e) => {
          e.target.placeholder = ''
        }}
        onBlur={(e) => {
          if (e.target.value === '') e.target.placeholder = prop.name
        }}
        className="p-2 border-solid border-[1px] border-[#3E64DA] hover:border-[#F39E31] w-full rounded-lg"
        type="text"
        name="name"
        id="name"
        value={prop.name}
      />
      <label htmlFor="phon" className="block my-2 font-bold">
        Phone
      </label>
      <input
        required
        onChange={handleChange}
        onFocus={(e) => {
          e.target.placeholder = ''
        }}
        onBlur={(e) => {
          if (e.target.value === '') e.target.placeholder = prop.phone
        }}
        className="outline-none p-2 border-solid border-[1px] border-[#3E64DA] hover:border-[#F39E31] w-full rounded-lg"
        type="number"
        name="phone"
        id="phon"
        value={prop.phone}
      />
      <label htmlFor="pass" className="block my-2 font-bold">
        Password
      </label>
      <input
        required
        onChange={handleChange}
        onFocus={(e) => {
          e.target.placeholder = ''
        }}
        onBlur={(e) => {
          if (e.target.value === '') e.target.placeholder = prop.password
        }}
        className="outline-none p-2 border-solid border-[1px] border-[#3E64DA] hover:border-[#F39E31] w-full rounded-lg"
        type="password"
        name="password"
        id="pass"
        value={prop.password}
      />
      <div className="flex justify-around align-middle p-2 my-2">
        <button
          type="submit"
          className="w-[100px] border-solid border-[1px] border-[#3E64DA] rounded-lg hover:border-[#F39E31]"
        >
          Edit
        </button>
        <button
          onClick={() => setGlobalState('PopInfo', false)}
          className="w-[100px] border-solid border-[1px] border-[#3E64DA] rounded-lg hover:border-[#F39E31]"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
export default AdminEditInfo
