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

function AdminSellerAccount() {
  const [check, setCheck] = useState(false)

  function deletePop(flag) {
    if (check === true) {
      return <DeletePop name={flag} />
    }
  }
  return (
    <main className="flex-1 p-[20px] text-white">
      {deletePop(true)}
      <div className="flex justify-between align-center">
        <h3 className="text-[#3E64DA]">Seller Accounts</h3>
        <button className="block text-[#3E64DA] border-[1px] border-solid border-[#3E64DA]  w-[70px]  rounded-[10px] mb-[5px] hover:border-[#F39E31] hover:text-[#F39E31]">
          Add
        </button>
      </div>
      <div className="flex my-[15px] justify-between flex-wrap">
        {Accounts.map((object, index) => {
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
                Phone Number : <span className="ml-[5px]">{object.phone}</span>
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
                  <button className="mb-[10px] mr-[10px] w-[50px] m rounded-[5px] border-[1px] border-solid border-[#3E64DA] hover:border-[#F39E31] hover:text-[#F39E31]">
                    edit
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}
export default AdminSellerAccount
