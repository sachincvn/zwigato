const mongoose = require("mongoose");
const mongoURI = process.env.DATABASE

const MongoDb = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("connected with database");

    const fooditems = await mongoose.connection.db.collection("food_items");
    fooditems.find({}).toArray(function (err, data) {
      if (err) console.log(err);
      else console.log(data);
    });
  } catch (error) {
    console.log(error);
    mongoose.connection.close();
  }
};

module.exports = MongoDb;
