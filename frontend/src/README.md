# Personal Information Form App

A full-stack web application built with React frontend and PHP/MySQL backend for collecting and storing personal information.

## 🚀 Features

Frontend: React with modern hooks (useState)

Backend: PHP with MySQL database

Form Validation: Real-time input validation and sanitization

Responsive Design: Clean and user-friendly interface

Database Integration: Automatically saves submissions to MySQL

RESTful API: Communication between frontend and backend

## 📋 Form Fields

The application collects the following personal information:

Name: Text input with alphabetical character validation

Surname: Text input with alphabetical character validation

Age: Numeric input with age range validation (0-999)

Profession: Text input with alphabetical character validation

Email: Email input with format validation

## 🛠️ Technology Stack

Frontend
React 19.1.1 - UI library

JavaScript ES6+ - Programming language

HTML5 - Markup

CSS3 - Styling

Fetch API - HTTP requests

Backend
PHP - Server-side scripting

MySQL - Database management

PDO - Database connectivity

JSON - Data interchange format

Development Tools
Vite - Build tool and development server

XAMPP - Local development environment

phpMyAdmin - Database management

## 📁 Project Structure

personell/
├── frontend/ # React application
│ ├── src/
│ │ ├── components/
│ │ │ └── Form.jsx # Main form component
│ │ ├── App.jsx # Root component
│ │ └── index.css # Global styles
│ ├── package.json
│ └── vite.config.js
└── backend/ # PHP API
└── api/
└── submit-form.php # Form submission endpoint

## 🚀 Installation & Setup

Prerequisites
Node.js (v14 or higher)

XAMPP or similar local server stack

MySQL database

1. Frontend Setup

# Navigate to frontend directory

cd frontend

# Install dependencies

npm install

# Start development server

npm run dev

## 🎯 Frontend will run on http://localhost:5173

2. Backend Setup 🐘
   Start XAMPP and ensure Apache & MySQL are running 🚀

Create a MySQL database named personal_db 🗄️

Create the users table with this SQL:

CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
surname VARCHAR(100) NOT NULL,
age INT NOT NULL,
profession VARCHAR(100) NOT NULL,
email VARCHAR(255) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

3. Configuration ⚙️

Update database credentials in backend/api/submit-form.php if different from XAMPP defaults:

$host = 'localhost';
$dbname = 'personal_db';
$username = 'root';
$password = '';

## 🔧 API Endpoints 🌐

POST /backend/api/submit-form.php
Submits form data to the database. 📤

Request Body:

{
"name": "John",
"surname": "Doe",
"age": 30,
"profession": "Developer",
"email": "john@example.com"
}

Success Response:

{
"success": true,
"message": "User data saved successfully!",
"inserted_id": 1
}

Error Response:

{
"success": false,
"error": "Error message description"
}

## 🛡️ Input Validation ✅

Frontend Validation
Name/Surname/Profession: Only letters, spaces, hyphens, and apostrophes 🔤

Age: Only numbers (0-9), limited to 3 digits 🔢

Email: Basic email format validation 📧

Backend Validation
Data type checking 🔍

SQL injection prevention using prepared statements 🛡️

Input sanitization 🧹

📊 Database Schema 🗄️

users Table

Column Type Constraints Description
id INT PRIMARY KEY, AUTO_INCREMENT Unique identifier 🔑
name VARCHAR(100) NOT NULL User's first name 👤
surname VARCHAR(100) NOT NULL User's last name 👥
age INT NOT NULL User's age 🔢
profession VARCHAR(100) NOT NULL User's profession 💼
email VARCHAR(255) NOT NULL User's email address 📧
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP Record creation timestamp ⏰

## 🎯 Usage 📱

Access the Application: Open http://localhost:5173 in your browser 🌐

Fill the Form: Enter your personal information in the respective fields 📝

Submit: Click the "Submit" button to save your data 💾

Confirmation: You'll receive a success message with your User ID ✅

View Data: Check phpMyAdmin to see the saved records in the users table 📊

## 🔄 Development Workflow 🔄

Form Submission Flow:

User fills form → React validates input → Data sent to PHP API → PHP saves to MySQL → Success/error response → Form reset 🔄

Error Handling:

Network errors display user-friendly messages ⚠️

Database errors are logged and reported 📝

Form validation errors prevent submission 🛑

## 🐛 Troubleshooting 🔧

Common Issues ❗
CORS Errors: Ensure PHP CORS headers are correctly set 🌐

Database Connection: Verify MySQL is running and credentials are correct 🔑

Form Not Submitting: Check browser console for JavaScript errors 🐛

Data Not Saving: Verify PHP error logging and database permissions ⚠️

## Debugging 🐛

Check browser Developer Tools (F12) for frontend errors 🔍

Check XAMPP logs for PHP/MySQL errors 📋

Verify database table structure matches expected schema 🗄️

## 📝 License 📄

## 📞 Support 📞

For support, please check the troubleshooting section or create an issue in the project repository. 🆘

Note: This is a development application. For production use, ensure to implement additional security measures, input validation, and error handling. 🔒

## 🎉 Success Indicators ✅

✅ Form successfully submits data

✅ Database records created with unique IDs

✅ Real-time input validation working

✅ Error handling for network issues

✅ Responsive design across devices

## ⚠️ Important Notes 📌

Ensure all services are running before testing 🚀

Check browser console for any JavaScript errors 🔍

Verify database connection in PHP 🔗

Test form validation with various inputs 🧪

!! Happy Coding! 🎊!!
