require("dotenv").config();
const express = require('express')
const app = express()
const port = process.env.port || 3001
const mongodb = require('./db.js')
const cors = require('cors')

mongodb();


app.use(cors())

app.get('/', (req, res) => {
  res.json({success: true})
})

app.use(express.json())
app.use("/api",require("./routes/User.js"))
app.use("/api",require("./routes/DisplayItems.js"))

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})