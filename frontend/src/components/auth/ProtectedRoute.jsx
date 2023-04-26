import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ isAdmin }) => {
  const { user } = useSelector((state) => state.auth)

  const location = useLocation()


  return (
    user.isAdmin === isAdmin
      ? <Outlet />
      : user 
        ? <Navigate to='/unauthorized' state={{ from: location }} replace />
        : <Navigate to='/login' state={{ from: location }} replace />
  )
}

export default ProtectedRoute