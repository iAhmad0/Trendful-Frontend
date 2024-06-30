import AdminCustomerAccount from '../Component/AdminCustomerAccount'
import AdminSideBar from '../Component/AdminSIdebar'

function AdminCustomerAccountsPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSideBar />
      <div className="flex-1">
        <AdminCustomerAccount />
      </div>
    </div>
  )
}
export default AdminCustomerAccountsPage
