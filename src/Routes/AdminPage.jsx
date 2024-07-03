import AdminProduct from "../Components/AdminProduct";
import AdminSideBar from "../Components/AdminSIdebar";

function AdminPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSideBar />
      <div className="flex-1">
        <AdminProduct />
      </div>
    </div>
  );
}

export default AdminPage;
