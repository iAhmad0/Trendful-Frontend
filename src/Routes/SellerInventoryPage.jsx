import SideBar from "../Components/SideBar";
import Inventory from "../Components/Inventory";

function SellerInventoryPage() {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex-1">
        <Inventory />
      </div>
    </div>
  );
}

export default SellerInventoryPage;
