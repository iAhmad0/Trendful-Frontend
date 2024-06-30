import DeletePop from './DeletePop'
import { useState } from 'react'
const Accounts = [
  {
    account: 'MohamedAhmed60@gmail.com',
    name: 'Mohamed Ahmed',
    phone: '02999999999999',
  },

  {
    account: 'MohamedTamer75@gmail.com',
    name: 'Mohamed Tamer',
    phone: '02777744445558',
  },
  {
    account: 'AhmedAsherf72@gmail.com',
    name: 'Ahmed Asherf',
    phone: '02559845656448',
  },
]
const User = [
  {
    account: 'MohamedAhmed60@gmail.com',
    name: 'Mohamed Ahmed',
    phone: '02999999999999',
    password: 'Mohamed@12',
  },

  {
    account: 'MohamedTamer75@gmail.com',
    name: 'Mohamed Tamer',
    phone: '02777744445558',
    password: 'Mohamed@34',
  },
  {
    account: 'AhmedAsherf72@gmail.com',
    name: 'Ahmed Asherf',
    phone: '02559845656448',
    password: 'Ahmed@12',
  },
]
function AdminCustomerAccount() {
  const [check, setCheck] = useState(false)
  const [pop, setPop] = useState(false)
  const [count, setCount] = useState(0)
  const [data, setData] = useState({
    account: '',
    name: '',
    phone: '',
    password: '',
  })
  function deletePop(flag) {
    if (check === true) {
      return <DeletePop name={flag} />
    }
  }
  const handleSubmit = function (e) {
    e.preventDefault()
    console.log(data)
    setPop(false)
  }
  const handleChange = function (e) {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  return (
    <main className="flex-1 p-[20px] text-white">
      {deletePop(true)}
      <div className="flex justify-between align-center">
        <h3 className="text-[#3E64DA]">Customer Account</h3>
      </div>
      <div
        className={`flex my-[15px] ${
          pop ? 'justify-around' : 'justify-between'
        } flex-wrap`}
      >
        {pop ? (
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
                if (e.target.value === '')
                  e.target.placeholder = User[count].account
              }}
              onChange={handleChange}
              className="p-2 border-solid border-[1px] border-[#3E64DA] hover:border-[#F39E31] w-full rounded-lg"
              type="email"
              name="account"
              id="email"
              value={User[count].account}
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
                if (e.target.value === '')
                  e.target.placeholder = User[count].name
              }}
              className="p-2 border-solid border-[1px] border-[#3E64DA] hover:border-[#F39E31] w-full rounded-lg"
              type="text"
              name="name"
              id="name"
              value={User[count].name}
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
                if (e.target.value === '')
                  e.target.placeholder = User[count].phone
              }}
              className="outline-none p-2 border-solid border-[1px] border-[#3E64DA] hover:border-[#F39E31] w-full rounded-lg"
              type="number"
              name="phone"
              id="phon"
              value={User[count].phone}
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
                if (e.target.value === '')
                  e.target.placeholder = User[count].password
              }}
              className="outline-none p-2 border-solid border-[1px] border-[#3E64DA] hover:border-[#F39E31] w-full rounded-lg"
              type="password"
              name="password"
              id="pass"
              value={User[count].password}
            />
            <div className="flex justify-around align-middle p-2 my-2">
              <button
                type="submit"
                className="w-[100px] border-solid border-[1px] border-[#3E64DA] rounded-lg hover:border-[#F39E31]"
              >
                Edit
              </button>
              <button
                onClick={() => setPop(false)}
                className="w-[100px] border-solid border-[1px] border-[#3E64DA] rounded-lg hover:border-[#F39E31]"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          Accounts.map((object, index) => {
            return (
              <div
                key={index}
                className="font-light w-[49%]  mb-[10px] p-[10px] text-[black] rounded-[5px] border-[1px] border-solid border-[#3E64DA] hover:border-[#F39E31]"
              >
                <p className="flex justify-between text-[#3E64DA] hover:text-[#F39E31]"></p>
                <p>
                  Name : <span className="ml-[5px]">{object.name}</span>
                </p>
                <p>
                  Email : <span className="ml-[5px]">{object.account}</span>
                </p>
                <p>
                  Phone Number :{' '}
                  <span className="ml-[5px]">{object.phone}</span>
                </p>
                <div className=" flex  text-[#3E64DA]">
                  <div className="ml-auto">
                    <button
                      onClick={function () {
                        setCheck(!check)
                      }}
                      className=" w-[50px] rounded-[5px] mb-[10px] mr-[10px] border-[1px] border-solid border-[#3E64DA] hover:border-[#F39E31] hover:text-[#F39E31]"
                    >
                      delete
                    </button>
                    <button
                      onClick={() => {
                        setPop(true)
                        setCount(index)
                      }}
                      className="mb-[10px] mr-[10px] w-[50px] m rounded-[5px] border-[1px] border-solid border-[#3E64DA] hover:border-[#F39E31] hover:text-[#F39E31]"
                    >
                      edit
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </main>
  )
}
export default AdminCustomerAccount
