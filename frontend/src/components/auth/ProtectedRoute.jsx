import { useLocation, Navigate } from "react-router-dom"
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth)
  const location = useLocation()

  return (
    !user && !user?.isAdmin
        ? <Navigate to="/login" state={{ from: location }} replace />
        : user || user.isAdmin
            ? children
            : <Navigate to="/unauthorized" state={{ from: location }} replace />
);
}

export default ProtectedRoute