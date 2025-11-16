const { v4: uuidv4 } = require('uuid');

let products = [
  { id: uuidv4(), name: 'Apple iPhone 15', description: 'Latest iPhone', price: 999, category: 'Electronics', inStock: true },
  { id: uuidv4(), name: 'Nike Running Shoes', description: 'Comfortable shoes', price: 120, category: 'Sportswear', inStock: true }
];

module.exports = products;