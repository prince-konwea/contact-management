require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false}))

app.get("/", (req, res) => {
    res.send("hello world!")
})



port = process.env.PORT || 5000;




app.listen(port, console.log(`server is running on ${port}`))