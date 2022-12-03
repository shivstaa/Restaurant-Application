//dependencies
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Order = require('./models/order');
//express app
const app = express();

//mongoDB connection
const dbURI = "mongodb+srv://sudo:sudo@orders.4u58cto.mongodb.net/userOrders?retryWrites=true&w=majority";

//listen for requests
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

//temporary
// app.listen(3000);
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

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

app.post('/checkOut', (req, res) => {
    var order = new Order(req.body);
    order.save()
         .then(result => {
            res.redirect('/complete');
         })
         .catch(err => {
            console.log(err);
         });
});

app.get('/complete', (req, res) => {
     res.render('complete', {title: 'Order Complete - Sun Devil Pizza'});
});

app.get('/manage', (req, res) => {
    Order.find()
         .then((result) =>{
            res.render('manage', {title: 'Manage Orders - Sun Devil Pizza', orders: result});
         })
         .catch((err)=>{
            console.log(err);
         });
});

app.use((req,res) => {
    res.status(404).render('404',{title: '404'});
})