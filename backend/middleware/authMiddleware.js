const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Assuming Bearer token
  if (!token) {
    return res.status(401).json({ message: 'Authentication token is missing' });
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret'); // Replace 'your_jwt_secret' with your JWT secret
    req.user = decoded; // Attach the decoded token (which includes the username) to the request object
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
