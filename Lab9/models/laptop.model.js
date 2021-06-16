const mongoose = require('mongoose');

const Laptop = mongoose.model('Laptop',
new mongoose.Schema({
    name:String,
    company:String,
    model: String,
    price:Number
}),
);