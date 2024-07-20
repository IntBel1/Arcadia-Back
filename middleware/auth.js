// middleware/auth.js
const jwt = require('jsonwebtoken');
const SECRET_KEY = '45cec340880ded850d4a3780fc5ec49f1de4de73e7e98a67102c101b5f3023ae0149f08ae4ba3e9bfffff97139b69ff68f9826852dc660c06e257a2d9854aa74';

const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.sendStatus(403);
  }

  try {
    const user = jwt.verify(token, SECRET_KEY);
    req.user = user;
    next();
  } catch (e) {
    res.sendStatus(403);
  }
};

module.exports = authenticateJWT;
