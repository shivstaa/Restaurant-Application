//dependencies
const express = require('express');
const morgan = require('morgan');

//express app
const app = express();
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

//temporary
app.listen(3000);


//URLs
app.get('/', (req,res) => {
    res.redirect('/home');
});

app.get('/home', (req,res) => {
    res.render('index', {title: 'Home - Sun Devil Pizza'});
});

app.get('/login', (req,res) => {
    res.render('login', {title: 'Login - Sun Devil Pizza'});
})

app.get('/startOrder', (req, res) => {
    res.render('startOrder', {title: 'Start Order - Sun Devil Pizza'});
})

app.get('/menu', (req, res) => {
    res.render('menu', {title: 'Menu - Sun Devil Pizza'});
})

app.get('/checkOut', (req, res) => {
    res.render('checkOut', {title: 'Checkout - Sun Devil Pizza'});
})

// app.get('/complete', (req, res) => {
//     res.render();
// })

app.get('/manage', (req, res) => {
    res.render('manage', {title: 'Manage Orders - Sun Devil Pizza'});
})