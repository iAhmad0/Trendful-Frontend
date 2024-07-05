import { useGlobalState, setGlobalState } from '../globalStates'

function AdminAccountPage({ prop: Accounts }) {
  const check = useGlobalState('Check')[0]
  console.log(Accounts)
  return Accounts.map((object, index) => {
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
                setGlobalState('Check', !check)
              }}
              className=" w-[50px] rounded-[5px] mb-[10px] mr-[10px] border-[1px] border-solid border-[#3E64DA] hover:border-[#F39E31] hover:text-[#F39E31]"
            >
              delete
            </button>
            <button
              onClick={() => {
                setGlobalState('PopInfo', true)
                setGlobalState('count', index)
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
}
export default AdminAccountPage
