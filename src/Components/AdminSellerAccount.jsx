import DeletePop from './DeletePop'
import AdminEditInfo from './AdminEditInfo'
import { useGlobalState } from '../globalStates'
import AdminAccountPage from './AdminAccountPage'
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
function AdminSellerAccount() {
  const check = useGlobalState('Check')[0]
  const count = useGlobalState('count')[0]
  const popInfo = useGlobalState('PopInfo')[0]
  function deletePop(flag) {
    if (check === true) {
      return <DeletePop name={flag} />
    }
  }

  return (
    <main className="flex-1 p-[20px] text-white">
      {deletePop(true)}
      <div className="flex justify-between align-center">
        <h3 className="text-[#3E64DA]">Seller Account</h3>
      </div>
      <div
        className={`flex my-[15px] ${
          popInfo ? 'justify-around' : 'justify-between'
        } flex-wrap`}
      >
        {popInfo ? (
          <AdminEditInfo prop={User[count]} />
        ) : (
          <AdminAccountPage prop={Accounts} />
        )}
      </div>
    </main>
  )
}
export default AdminSellerAccount
