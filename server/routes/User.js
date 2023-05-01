const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtSecret = "endpZ2F0bw=="

//create user
router.post(
  "/createuser",
  [
    body("email", "invalid email").isEmail(),
    body("password", "password must be more than 5 character").isLength({
      min: 5,
    }),
    body("firstName", "name must be more than 5 character").isLength({
      min: 5,
    }),
    body("city", "ciity must be more than 5 character").isLength({ min: 5 }),
    body("postalCode", "postalCode must be more than 5").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10)
    let secPassword = await bcrypt.hash(req.body.password,salt);
    try {
      await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
        city: req.body.city,
        postalCode: req.body.postalCode,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post("/login", async (req, res) => {
  try {

    if(!req.body.email || !req.body.password){
      return res.status(400).json({ errors: "Invalid credentials " });
    }
    
    let userData = await User.findOne({ email: req.body.email });
    if (!userData) {
      return res.status(400).json({ errors: "Invalid credentials " });
    }

    const isValidPassword = await bcrypt.compare(req.body.password,userData.password)
    if(!isValidPassword){
      return res.status(400).json({ errors: "Invalid credentials " });
    }

    const data = {
      user:{
        id: userData.id
      }
    }

    const authToken = jwt.sign(data,jwtSecret);

    res.json({ success: true, authToken : authToken  });
  
  } catch (error) {
    console.log(error);
    res.json({ success: false});
  }
});

module.exports = router;
