import Sidebar from "../Sidebar";
import SellerAccounts from "../Component/SellerAccounts";

function SellerAccountsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <SellerAccounts />
      </div>
    </div>
  );
}
export default SellerAccountsPage;
