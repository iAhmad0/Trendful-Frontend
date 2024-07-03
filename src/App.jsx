import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import LogAndReg from "./Routes/LogAndReg";
import YourAccount from "./Routes/YourAccount";
import ProductPage from "./Routes/ProductPage";
import ErrorPage from "./Routes/ErrorPage";
import SellerLogin from "./Routes/SellerLogin";
import SellerPage from "./Routes/SellerPage";
import SellerProductPage from "./Routes/SellerProductPage";
import SellerInventoryPage from "./Routes/SellerInventoryPage";
import SellerAccount from "./Routes/SellerAccountPage";
import SearchPage from "./Routes/SearchPage";
import CartPage from "./Routes/CartPage";
import PaymentPage from "./Routes/PaymentPage";
import PurchaseHistoryPage from "./Routes/PurchaseHistoryPage";
import PointsAndRewardPage from "./Routes/PointsAndRewardPage";
import AdminLogin from "./Routes/AdminLogin";
import AdminPage from "./Routes/AdminPage";
import AdminChat from "./Routes/AdminChat";
import AdminCustomerAccountsPage from "./Routes/AdminCustomerAccountsPage";
import AdminSellerAccountsPage from "./Routes/AdminSellerAccountsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LogAndReg />} />
        <Route path="settings" element={<YourAccount />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="search/" element={<SearchPage />} />
        <Route path="search/:name" element={<SearchPage />} />
        <Route path="seller/login" element={<SellerLogin />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="history" element={<PurchaseHistoryPage />} />
        <Route path="point" element={<PointsAndRewardPage />} />

        <Route path="admin/login" element={<AdminLogin />} />
        <Route path="admin/products" element={<AdminPage />} />
        <Route path="admin/chat" element={<AdminChat />} />
        <Route
          path="admin/customerAccount"
          element={<AdminCustomerAccountsPage />}
        />
        <Route
          path="admin/sellerAccount"
          element={<AdminSellerAccountsPage />}
        />
        {/* <Route path="seller" element={<SellerPage />} /> */}
        <Route path="seller/products" element={<SellerProductPage />} />
        <Route path="seller/inventory" element={<SellerInventoryPage />} />
        <Route path="seller/settings" element={<SellerAccount />} />
        <Route path="checkout" element={<PaymentPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
