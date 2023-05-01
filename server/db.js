const mongoose = require("mongoose");
const mongoURI = process.env.DATABASE

const MongoDb = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("connected with database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = MongoDb;
