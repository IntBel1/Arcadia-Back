// controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = require('../models/Utilisateur');

const SECRET_KEY = '45cec340880ded850d4a3780fc5ec49f1de4de73e7e98a67102c101b5f3023ae0149f08ae4ba3e9bfffff97139b69ff68f9826852dc660c06e257a2d9854aa74';

exports.register = async (req, res) => {
    try {
      const { username, password, nom, prenom, email, role_id } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await users.create({ username, password: hashedPassword, nom, prenom, email,  role_id });
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user =  await users.findOne({ where: { username } });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  const hashedpassword = user.password;

  const isValid = await bcrypt.compare(password, hashedpassword);

  if (!isValid) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  const token = jwt.sign({ username: user.username, role: user.role_id}, SECRET_KEY, { expiresIn: '1h' });

  res.json({ token:token,role:user.role_id });
};
