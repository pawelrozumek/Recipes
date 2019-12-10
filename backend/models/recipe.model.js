const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    preparing: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    }
});

const Recipe = mongoose.model('Recipes', RecipeSchema);

module.exports = Recipe;