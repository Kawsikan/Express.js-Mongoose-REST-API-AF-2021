const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true
    },
    vehicles: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'vehicles' }]

});

const Category = mongoose.model('categories', CategorySchema);
module.exports = Category;