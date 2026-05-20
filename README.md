# Ecommerce Web App

A full-stack ecommerce website built with the **MERN stack** (MongoDB, Express, React, Node.js). This project was created to enhance my portfolio while learning modern web development practices.

## 🎯 Project Overview

This ecommerce application demonstrates a complete online shopping experience, from product browsing and cart management to secure checkout and order processing. The project showcases best practices in building scalable, maintainable web applications using the MERN stack.

## 🛠️ Tech Stack

- **Frontend**: React.js, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other**: JavaScript

## ✨ Features

- **Product Catalog**: Browse and search products with detailed information
- **Shopping Cart**: Add, remove, and manage items in cart
- **User Authentication**: Secure user registration and login
- **Order Management**: Track and manage customer orders
- **Responsive Design**: Mobile-friendly interface for all devices
- **Product Filters**: Filter products by category, price, and ratings

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/lestrofarhan/Ecommerce-Web-App.git
cd Ecommerce-Web-App
```

### 2. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 3. Environment Variables

Create a `.env` file in the backend directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

### 4. Run the Application

**Start Backend Server:**
```bash
cd backend
npm start
```

**Start Frontend (in a new terminal):**
```bash
cd frontend
npm start
```

The application should now be running at `http://localhost:3000`

## 📁 Project Structure

```
Ecommerce-Web-App/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── public/
└── README.md
```

## 🔧 Configuration

Update the API endpoint in your frontend `.env` file if needed:
```
REACT_APP_API_URL=http://localhost:5000
```

## 📚 API Endpoints

Key endpoints include:
- `GET /api/products` - Fetch all products
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Fetch order details

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Farhan** - Portfolio project for MERN stack development

## 🙏 Acknowledgments

- MERN stack documentation and tutorials
- MongoDB and Express.js communities
- React.js best practices

---

**Note**: This is a portfolio project created for learning purposes. It demonstrates practical implementation of the MERN stack and modern web development practices.
