require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');

// Routes
const productRoutes = require('./routes/products');

// Parse JSON
app.use(bodyParser.json());

// Logger
app.use(logger);

// Root
app.get('/', (req, res) => {
  res.send('Hello World');
});

// API routes with authentication
app.use('/api/products', auth, productRoutes);

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
