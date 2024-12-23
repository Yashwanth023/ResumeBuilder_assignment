const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const resumeRoutes = require('./routes/resumeRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000'
}));
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api', resumeRoutes);
app.use('/api', uploadRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});