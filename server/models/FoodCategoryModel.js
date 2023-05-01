const mongoose = require('mongoose')
const { Schema } = mongoose

const FoodCategoryModel = new Schema({
    CategoryName:{
        type: String,
    }
})

module.exports = mongoose.model('food_categories', FoodCategoryModel)