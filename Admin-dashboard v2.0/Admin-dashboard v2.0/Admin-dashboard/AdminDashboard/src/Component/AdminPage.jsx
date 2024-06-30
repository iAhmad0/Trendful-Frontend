import Sidebar from "../Sidebar";
import Products from "../Component/Products";
function AdminPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Products />
      </div>
    </div>
  );
}
export default AdminPage;
