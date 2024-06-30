import AdminProduct from '../Component/AdminProduct'
import AdminSideBar from '../Component/AdminSIdebar'

function AdminPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSideBar />
      <div className="flex-1">
        <AdminProduct />
      </div>
    </div>
  )
}
export default AdminPage
