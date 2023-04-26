import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import TopMenu from './components/layout/TopMenu'
import ToastMessage from './components/ToastMessage'

import ProductsPage from './pages/products/ProductsPage'
import ProductDetailsPage from './pages/products/ProductDetailsPage'
import AdminDashboardPage from './pages/admin/AdminDashboardPage'
import OrderSuccessPage from './pages/orders/OrderSuccessPage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import NotFoundPage from './pages/NotFoundPage'
import CategoryListPage from './pages/admin/CategoryListPage'
import PublisherListPage from './pages/admin/PublisherListPage'

const App = () => {
  return (
    <Router>
      <Header />
      <TopMenu />
        <ToastMessage />
          <Routes>
            <Route path='/' element={<ProductsPage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/products/search/:keyword' element={<ProductsPage />} />
            <Route path='/products/page/:page' element={<ProductsPage />} />
            <Route path='/products/search/:keyword/page/:page' element={<ProductsPage />} />
            <Route path='/product/:productId' element={<ProductDetailsPage />} />

            <Route path='/admin-dashboard' element={<AdminDashboardPage />} />
            <Route path='/admin/categories' element={<CategoryListPage />} />
            <Route path='/admin/publishers' element={<PublisherListPage />} />

            <Route path='/order-success' element={<OrderSuccessPage />} />
            
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/*' element={<NotFoundPage />} />
          </Routes>
          <Footer />
    </Router>
  )
}

export default App
