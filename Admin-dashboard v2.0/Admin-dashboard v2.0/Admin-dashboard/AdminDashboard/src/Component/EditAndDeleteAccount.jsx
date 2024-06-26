import { FaShoppingCart } from 'react-icons/fa'
import { IoBagHandle } from 'react-icons/io5'
const Accounts = [
  {
    account: 'MohamedTamer75@gmail.com',
    name: 'Mohamed Tamer',
    phone: '025664899456448',
    role: 'Seller',
  },
  {
    account: 'MohamedAhmed60@gmail.com',
    name: 'Mohamed Ahmed',
    phone: '02999999999999',
    role: 'Buyer',
  },
  {
    account: 'AhmedHussein90@gmail.com',
    name: 'Ahmed Hussein',
    phone: '025558888888',
    role: 'Seller',
  },
  {
    account: 'MohamedTamer75@gmail.com',
    name: 'Mohamed Tamer',
    phone: '02777744445558',
    role: 'Buyer',
  },
  {
    account: 'AhmedAsherf72@gmail.com',
    name: 'Ahmed Asherf',
    phone: '02559845656448',
    role: 'Buyer',
  },
]

function EditAndDeleteAccount() {
  return (
    <main className="flex-1 p-[20px] text-white">
      <div className="flex justify-between align-center">
        <h3 className="text-[#3E64DA]">Customer Account</h3>
        <button className="block text-[#3E64DA] border-[1px] border-solid border-[#3E64DA]  w-[70px]  rounded-[10px] mb-[5px] hover:border-[#F39E31] hover:text-[#F39E31]">
          add
        </button>
      </div>
      <div className="flex my-[15px] justify-between flex-wrap">
        {Accounts.map((object) => {
          return (
            <div className="font-light w-[49%]  mb-[10px] p-[10px] text-[black] rounded-[5px] border-[1px] border-solid border-[#3E64DA] hover:border-[#F39E31]">
              <p className="flex justify-between text-[#3E64DA] hover:text-[#F39E31]">
                {object.role}{' '}
                {object.role === 'Seller' ? (
                  <IoBagHandle />
                ) : (
                  <FaShoppingCart />
                )}
              </p>
              <p>
                Name : <span className="ml-[5px]">{object.name}</span>
              </p>
              <p>
                Email : <span className="ml-[5px]">{object.account}</span>
              </p>
              <p>
                Phone Number : <span className="ml-[5px]">{object.phone}</span>
              </p>
              <div className=" float-end text-[#3E64DA]">
                <button className=" w-[50px] rounded-[5px] mb-[10px] mr-[10px] border-[1px] border-solid border-[#3E64DA] hover:border-[#F39E31] hover:text-[#F39E31]">
                  delete
                </button>
                <button className="  w-[50px] m rounded-[5px] border-[1px] border-solid border-[#3E64DA] hover:border-[#F39E31] hover:text-[#F39E31]">
                  edit
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}
export default EditAndDeleteAccount
