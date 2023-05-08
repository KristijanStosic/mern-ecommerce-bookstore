import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import TopMenu from './components/layout/TopMenu'
import ToastMessage from './components/ToastMessage'

import NotFoundPage from './pages/NotFoundPage'
import ProductsPage from './pages/products/ProductsPage'
import ProductDetailsPage from './pages/products/ProductDetailsPage'
import AdminDashboardPage from './pages/admin/AdminDashboardPage'
import OrderSuccessPage from './pages/orders/OrderSuccessPage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import CategoryListPage from './pages/admin/CategoryListPage'
import PublisherListPage from './pages/admin/PublisherListPage'
import GenreListPage from './pages/admin/GenreListPage'
import ProductListPage from './pages/admin/ProductListPage'
import UserListPage from './pages/admin/UserListPage'
import ProfilePage from './pages/profile/ProfilePage'
import OrderListPage from './pages/admin/OrderListPage'
import OrderDetailsPage from './pages/admin/OrderDetailsPage'
import ReviewListPage from './pages/admin/ReviewListPage'
import CartPage from './pages/cart/CartPage'
import MyOrdersPage from './pages/orders/MyOrdersPage'
import OrderFailedPage from './pages/orders/OrderFailedPage'
import CheckoutPage from './pages/cart/CheckoutPage'

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

          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/my-orders' element={<MyOrdersPage />} />

          <Route path='/admin-dashboard' element={<AdminDashboardPage />} />
          <Route path='/admin/categories' element={<CategoryListPage />} />
          <Route path='/admin/publishers' element={<PublisherListPage />} />
          <Route path='/admin/genres' element={<GenreListPage />} />
          <Route path='/admin/orders' element={<OrderListPage />} />
          <Route path='/admin/order/:orderId' element={<OrderDetailsPage />} />
          <Route path='/admin/reviews' element={<ReviewListPage />} />
          <Route path='/admin/users' element={<UserListPage />} />
          <Route path='/admin/products' element={<ProductListPage />} />
          <Route path='/admin/products/page/:page' element={<ProductListPage />} />
          <Route path='/admin/products/search/:keyword' element={<ProductListPage />} />
          <Route path='/admin/products/search/:keyword/page/:page' element={<ProductListPage />} />

          <Route path='/order-success' element={<OrderSuccessPage />} />
          <Route path='/order-failed' element={<OrderFailedPage />} />

          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/my-profile' element={<ProfilePage />} />

          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App
