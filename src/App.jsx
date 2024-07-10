import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Routes/Login";
import Register from "./Routes/Register";

import Layout from "./Routes/Layout";
import Home from "./Routes/Home";
import YourAccount from "./Routes/YourAccount";
import ProductPage from "./Routes/ProductPage";
import SearchPage from "./Routes/SearchPage";
import Cart from "./Routes/Cart";
import Payment from "./Routes/Payment";
import PurchaseHistory from "./Routes/PurchaseHistory";
import PointsAndRewardPage from "./Routes/PointsAndRewardPage";

import AdminLogin from "./Routes/AdminLogin";
import AdminPage from "./Routes/AdminPage";
import AdminChat from "./Routes/AdminChat";
import AdminCustomerAccountsPage from "./Routes/AdminCustomerAccountsPage";
import AdminSellerAccountsPage from "./Routes/AdminSellerAccountsPage";

import SellerLogin from "./Routes/SellerLogin";
import SellerRegister from "./Routes/SellerRegister";

import SellerLayout from "./Routes/SellerLayout";
import SellerProducts from "./Routes/SellerProducts";
import SellerInventory from "./Routes/SellerInventory";
import SellerHistory from "./Routes/SellerHistory";
import SellerAccount from "./Routes/SellerAccount";

import ErrorPage from "./Routes/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<YourAccount />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="search/" element={<SearchPage />} />
          <Route path="search/:word" element={<SearchPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="history" element={<PurchaseHistory />} />
          <Route path="points" element={<PointsAndRewardPage />} />
          <Route path="checkout" element={<Payment />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>

        <Route path="seller/login" element={<SellerLogin />} />
        <Route path="seller/register" element={<SellerRegister />} />

        <Route path="seller/" element={<SellerLayout />}>
          <Route index element={<SellerProducts />} />
          <Route path="inventory" element={<SellerInventory />} />
          <Route path="history" element={<SellerHistory />} />
          <Route path="settings" element={<SellerAccount />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
