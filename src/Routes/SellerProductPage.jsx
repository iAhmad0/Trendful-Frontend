import SideBar from "../Component/SideBar";
import SellerProduct from "../Component/SellerProduct";
function SellerProductPage() {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="flex-1">
        <SellerProduct />
      </div>
    </div>
  );
}
export default SellerProductPage;
