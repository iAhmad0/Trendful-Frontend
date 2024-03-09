import SideBar from '../Component/SideBar'
import Inventory from '../Component/Inventory'
function SellerInventoryPage() {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex-1">
        <Inventory />
      </div>
    </div>
  )
}
export default SellerInventoryPage
