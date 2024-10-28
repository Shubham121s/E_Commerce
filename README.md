
# E-Commerce Project

## Overview
A MERN stack eCommerce application for browsing products, managing a shopping cart, and processing orders. Admins can manage products and view orders.

## Technologies Used
- **MongoDB**: NoSQL database for data storage.
- **Express.js**: Server-side framework.
- **React.js**: Frontend library.
- **Node.js**: JavaScript runtime.
- **Mongoose**: ODM for MongoDB.
- **JWT**: Authentication.
- **Stripe**: Payment processing.

## Features
- User authentication (Register, Login, Logout)
- Product browsing and search
- Shopping cart management
- Order placement and tracking
- Admin dashboard for product management
- Stripe payment integration

## Installation

### Prerequisites
- Node.js (v14+)
- MongoDB (local or cloud)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Shubham121s/ecommerce-project.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd ecommerce-project/backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```
5. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ecommerce-project/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```
4. Start the frontend server:
   ```bash
   npm start
   ```

## Usage
1. Open `http://localhost:3000` in your browser.
2. Register or log in.
3. Browse products, add to cart, and check out.

## API Endpoints
- **POST /api/users/register** - Register user
- **POST /api/users/login** - Log in user
- **GET /api/products** - Get all products
- **GET /api/products/:id** - Get product by ID
- **POST /api/orders** - Place order
- **GET /api/orders/:id** - Get order details
- **GET /api/admin/products** - Get all products (admin)
- **POST /api/admin/products** - Add product (admin)
- **PUT /api/admin/products/:id** - Update product (admin)
- **DELETE /api/admin/products/:id** - Delete product (admin)

## Contributing
1. Fork the repo.
2. Create a branch (`git checkout -b feature-branch`).
3. Commit changes (`git commit -am 'Add feature'`).
4. Push branch (`git push origin feature-branch`).
5. Open a Pull Request.

---


