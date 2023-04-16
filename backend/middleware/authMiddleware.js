import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import createHttpError from 'http-errors'

const authenticate = async (req, res, next) => {
    let token
    const authHeader = req.headers.authorization || req.headers.Authorization
  
    if (!authHeader || !authHeader?.startsWith('Bearer ')) {
      throw createHttpError(401, 'Please login to access this route')
    }
  
    try {
      // Get token from header
      token = authHeader.split(' ')[1]
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get user from token
      req.user = await User.findById(decoded.userId).select('-password')
  
      if (!req.user) {
        throw createHttpError(401, 'Not authorized')
      }
  
      next()
    } catch (error) {
      console.log(error)
      throw createHttpError(401, 'Not authorized, token failed')
    }
  }

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    throw createHttpError(403, 'Not authorized as an admin')
  }
}

export { authenticate, admin }