// app.js or server.js
const express = require('express');
const bodyParser = require('body-parser');
const serviceRoutes = require('./routes/serviceRoutes');
const sequelize = require('./config/database'); // Adjust the path to your database configuration

const app = express();
const PORT = process.env.PORT || 3000;



// Routes
app.use('/api', serviceRoutes);

// Sync database and start server
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
