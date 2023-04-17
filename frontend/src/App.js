import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast';
import Header from './components/Header'
import Footer from './components/Footer'
import TopMenu from './components/TopMenu'
import Spinner from './components/Spinner'

const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const RegisterPage = lazy(() => import('./pages/RegisterPage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage'))

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Toaster position='top-right' />
        <TopMenu />
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
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </>
    </Router>
  )
}

export default App