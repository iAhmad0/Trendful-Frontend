import EditAndDeleteAccount from '../Component/EditAndDeleteAccount'
import Sidebar from '../Sidebar'

function EditAndDeletePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <EditAndDeleteAccount />
      </div>
    </div>
  )
}
export default EditAndDeletePage
