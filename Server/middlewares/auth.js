import jwt from 'jsonwebtoken';
import User from "../models/user.model.js";

const auth = async(req, res, next) => {
//   let token = req.headers['authorization'];
let { token } = req.cookies;

  if (!token) {
    token = req.cookies.token; 
  }

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  if (token.startsWith("Bearer ")) {
    token = token.split(' ')[1];
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.userId = decoded._id; 
    
    next();
  });
};

export default auth;
