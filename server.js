const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Connect to MongoDB (replace with your actual connection string)
mongoose.connect('mongodb://localhost:27017/ClassBooking', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Middleware to set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory - pointing to the views folder inside the public folder
app.set('views', path.join(__dirname, 'public', 'views')); // Updated path to point to the correct location

// Serve static files (CSS, JS, images) from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for the index page (root route)
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        backgroundImage: 'FIt.jpg' // Adjust the path if needed
    });
});

// Route for the about page
// Route for the about page
app.get('/about', (req, res) => {
    const aboutText = "Welcome to our fitness center! We offer a variety of classes to help you achieve your fitness goals. Our experienced trainers are here to guide you every step of the way.";
    
    res.render('about', {
        title: 'About Us',
        backgroundImage: 'FIt.jpg', // Adjust the path if needed
        aboutText: aboutText // Pass the aboutText variable to the view
    });
});

// Route for the class registration page
app.get('/classregistration', (req, res) => {
    res.render('class-registration', {
        title: 'Class Registration',
        backgroundImage: 'FIt.jpg' // Adjust the path if needed
    });
});

// Route for the registration page
app.get('/registration', (req, res) => {
    res.render('registration', {
        title: 'Register',
        backgroundImage: 'FIt.jpg' // Adjust the path if needed
    });
});

// Route for the login page
app.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login',
        backgroundImage: 'FIt.jpg' // Adjust the path if needed
    });
});

// Route for the class schedule page
app.get('/schedule', (req, res) => {
    res.render('schedule', {
        title: 'Class Schedule',
        backgroundImage: 'FIt.jpg' // Adjust the path if needed
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});