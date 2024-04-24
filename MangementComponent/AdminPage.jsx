import Sidebar from "../Sidebar";
import Home from "../Home";
function AdminPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Home />
      </div>
    </div>
  );
}
export default AdminPage;
