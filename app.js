// app.js or server.js
const express = require('express');
const debug = require('debug')('app');

const bodyParser = require('body-parser');
const serviceRoutes = require('./routes/serviceRoutes');
const authRoutes = require('./routes/authRoutes')
const sequelize = require('./utils/database');// Adjust the path to your database configuration
const models = require('./models/init');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Routes
app.use('/service', serviceRoutes);
app.use('/user', authRoutes);
app.use(bodyParser.json());

// Sync database and start server
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      debug(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });