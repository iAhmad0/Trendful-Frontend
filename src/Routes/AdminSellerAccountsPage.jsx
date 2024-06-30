import AdminSideBar from '../Component/AdminSIdebar'
import AdminSellerAccount from '../Component/AdminSellerAccount'

function AdminSellerAccountsPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSideBar />
      <div className="flex-1">
        <AdminSellerAccount />
      </div>
    </div>
  )
}
export default AdminSellerAccountsPage
