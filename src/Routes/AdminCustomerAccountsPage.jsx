import AdminCustomerAccount from "../Components/AdminCustomerAccount";
import AdminSideBar from "../Components/AdminSIdebar";

function AdminCustomerAccountsPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSideBar />
      <div className="flex-1">
        <AdminCustomerAccount />
      </div>
    </div>
  );
}

export default AdminCustomerAccountsPage;
