# ecom-ejs

An E-commerce backend web application built using Node.js, Express.js, MongoDB, and EJS as the template engine. The app includes features like user authentication, admin product management, shopping cart functionality, and session handling.


## 🚀 Features

- User Signup/Login with JWT and bcrypt
- Admin product creation and management
- Add to Cart functionality
- Flash messages for user feedback
- User sessions with express-session
- EJS template rendering
- Secure handling of environment variables

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Templating Engine**: EJS
- **Authentication**: JWT, bcrypt
- **Session Management**: express-session
- **Flash Messages**: connect-flash
- **Environment Variables**: dotenv

## 📦 Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=your_port
JWT_SECRET=your_jwt_secret
MONGODB_URI=your_mongodb_connection_string
EXPRESS_SESSION_SECRET=your_express_session_secret
```

## 🧪 Installation & Running

```bash
git clone https://github.com/ishantmishra03/ecom-ejs.git
cd ecom-ejs
npm install
npm start
```

The app will be running at `http://localhost:PORT` (replace `PORT` with the value from your `.env` file).

## ✅ Usage

- Register or login as a user
- Admins can add products
- Users can browse products and add them to cart
- Logout to end session

## 📝 License

This project is licensed under the MIT License.
