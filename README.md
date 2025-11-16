# Express Products API

A RESTful API using Express.js with CRUD, middleware, validation, authentication, and error handling.

## Setup

1. Clone repo
2. Install dependencies:

```bash
npm install
```

3. Create `.env` file based on `.env.example`:

```
PORT=3000
API_KEY=123456
```

4. Start server:

```bash
node server.js
```

---

## API Endpoints

- **GET /** → Hello World
- **GET /api/products** → List all products (supports query params: `category`, `search`, `page`, `limit`)
- **GET /api/products/:id** → Get a product by ID
- **POST /api/products** → Create product (JSON body required)
- **PUT /api/products/:id** → Update product
- **DELETE /api/products/:id** → Delete product
- **GET /api/products/stats** → Product statistics by category

### Headers

All `/api/products` endpoints require:

```
x-api-key: 123456
```

### Sample POST body

```json
{
  "name": "Samsung Galaxy S23",
  "description": "Latest Samsung Phone",
  "price": 900,
  "category": "Electronics",
  "inStock": true
}
```