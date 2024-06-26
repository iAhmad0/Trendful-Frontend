import Inventory from "../Component/inventory";
import Sidebar from "../Sidebar";

function InventoryPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Inventory />
      </div>
    </div>
  );
}
export default InventoryPage;
