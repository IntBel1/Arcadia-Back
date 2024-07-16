const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config');
const animalRoutes = require('./routes/animalRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/animals', animalRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
