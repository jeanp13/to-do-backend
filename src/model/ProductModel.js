const mongoose = require('../config/database');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    type: {type: Number, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    amount: {type: Number, default: 0},
    done: {type: Boolean, default: false},
    user: {type: Number, default: 1},
    created: {type: Date, default: Date.now()},
});

module.exports = mongoose.model('Product', ProductSchema);