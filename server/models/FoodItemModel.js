const mongoose = require('mongoose')
const { Schema } = mongoose

const FoodItemModel = new Schema({
    CategoryName:{
        type: String,
    },
    name:{
        type: String,
    },
    location:{
        type: String,
    },
    img:{
        type: String,
    },
    options:{
        type: Array,
    },
    description:{
        type: String,
    }
})

module.exports = mongoose.model('food_items', FoodItemModel)