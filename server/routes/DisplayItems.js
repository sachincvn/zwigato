const express = require("express");
const FoodItemModel = require("../models/FoodItemModel");
const FoodCategoryModel = require("../models/FoodCategoryModel");
const router = express.Router();


router.get("/foodItems", async (req, res) => {
    try {
        const foodItems = await FoodItemModel.find({});
        const foodCategory = await FoodCategoryModel.find({});
        res.json([foodItems,foodCategory])
        
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;