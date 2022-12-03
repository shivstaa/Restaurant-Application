const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNum: {
        type: String,
        required: true
    },
    asuID: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pizza: {
        type: String,
        required: false
    },
    toppings: {
        type: String,
        required: false
    },
    sides: {
        type: String,
        required: false
    },
    drinks: {
        type: String,
        required: false
    },
    cost: {
        type: String,
        required: false
    }
},  {timestamps: true});

//model that will store schema within the collection "order"
const order = mongoose.model('order', orderSchema);
module.exports = order;