const { ValidationError } = require('../errors/ValidationError');

const validateProduct = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;
  if (!name || !description || price == null || !category || inStock == null) {
    return next(new ValidationError('All product fields are required'));
  }
  next();
};

module.exports = { validateProduct };