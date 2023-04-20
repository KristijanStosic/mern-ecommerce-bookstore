import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import TopMenu from './components/layout/TopMenu'
import Spinner from './components/Spinner'
import Toast from './components/Toast';

const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const LoginPage = lazy(() => import('./pages/auth/LoginPage'))
const RegisterPage = lazy(() => import('./pages/auth/RegisterPage'))
const ProductsPage = lazy(() => import('./pages/products/ProductsPage'))
const ProductDetailsPage = lazy(() => import('./pages/products/ProductDetailsPage'))
const AdminDashboardPage = lazy(() => import('./pages/admin/AdminDashboardPage'))
const CategoryList = lazy(() => import('./components/categories/CategoryList'))
const OrderSuccessPage = lazy(() => import('./pages/orders/OrderSuccessPage'))

const App = () => {
  return (
    <Router>
      <>
      <Header />
      <TopMenu />
        <Toast />
        <Suspense fallback={
            <Spinner />
          }
        >
          <Routes>
            <Route path='/' element={<ProductsPage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/products/search/:keyword' element={<ProductsPage />} />
            <Route path='/products/page/:page' element={<ProductsPage />} />
            <Route path='/products/search/:keyword/page/:page' element={<ProductsPage />} />
            <Route path='/product/:productId' element={<ProductDetailsPage />} />
            <Route path='/admin-dashboard' element={<AdminDashboardPage />} />
            <Route path='/admin/categories' element={<CategoryList />} />
            <Route path='/order-success' element={<OrderSuccessPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/*' element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </Suspense>
      </>
    </Router>
  )
}

export default App
