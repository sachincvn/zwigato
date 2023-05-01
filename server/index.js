require("dotenv").config();
const express = require('express')
const app = express()
const port = process.env.port || 3001
const mongodb = require('./db.js')
mongodb();


app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin","htps://zwigato-be.onrender.com")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.get('/', (req, res) => {
  res.json({success: true})
})

app.use(express.json())
app.use("/api",require("./routes/User.js"))

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})