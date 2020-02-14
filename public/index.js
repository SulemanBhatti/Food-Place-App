"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
//const _mongoose = require("mongoose");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.get("/", function (req, res) {
    res.json("sever is running!!");
});
app.get("/api/getdata", function (req, res) {
    res.json("sever is running");
});
app.listen(port, err => {
    if (!err)
        console.log(`server is running on port ${port}`);
});
mongoose
    .connect("mongodb://localhost:27017/Food-Place-DB?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
    console.log("mongo connected successfully");
})
    .catch(err => {
    console.log(err);
});
