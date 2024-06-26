import './App.css'
import AdminPage from './Component/AdminPage'
import InventoryPage from './Routes/InventoryPage'
import ProductPage from './Routes/ProductPage'
import EditAndDeletePage from './Routes/EditAndDeletePage'
import ReviewPage from './Routes/ReviewPage'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Chat from './Routes/Chat'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="Inventory" element={<InventoryPage />} />
        <Route path="Products" element={<ProductPage />} />
        <Route path="EditAndDelete" element={<EditAndDeletePage />} />
        <Route path="Review" element={<ReviewPage />} />
        <Route path="Chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
