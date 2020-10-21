const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config/index')
const HttpError = require('../error-handle/http-error');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1]; // Authorization: 'Bearer TOKEN'
    if (!token) {
      throw new Error('Authentication failed!');
    }
    const decodedToken = jwt.verify(token, JWT_SECRET);
    req.userData = {
      email: decodedToken.email,
      isAdmin: decodedToken.isAdmin
    };
    next();
  } catch (err) { 
    const error = new HttpError('Authentication failed!', 403);
    return next(error);
  }
};
