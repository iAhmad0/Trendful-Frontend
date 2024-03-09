import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import LogAndReg from "./Routes/LogAndReg";
import YourAccount from "./Routes/YourAccount";
import ProductPage from "./Routes/ProductPage";
import ErrorPage from "./Routes/ErorrPage";
import SellerLogin from "./Routes/SellerLogin";
import SellerPage from "./Routes/SellerPage";
import SellerProductPage from "./Routes/SellerProductPage";
import SellerInventoryPage from "./Routes/SellerInventoryPage";
import SellerAccount from "./Routes/SellerAccountPage";
import SearchPage from "./Routes/SearchPage";

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
        {/* <Route path="seller" element={<SellerPage />} /> */}
        <Route path="seller/products" element={<SellerProductPage />} />
        <Route path="seller/inventory" element={<SellerInventoryPage />} />
        <Route path="seller/settings" element={<SellerAccount />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
