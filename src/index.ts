const express = require("express");
//const _mongoose = require("mongoose");
const bodyParser = require("body-parser");
import * as mongoose from "mongoose";
const app = express();
const port = 3000;
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.json("sever is running...");
});

app.get("/api/getdata", function(req, res) {
  res.json("sever is running");
});

app.listen(port, err => {
  if (!err) console.log(`server is running on port ${port}`);
});

mongoose
  .connect(
    "mongodb://localhost:27017/Food-Place-DB?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("mongo connected successfully");
  })
  .catch(err => {
    console.log(err);
  });
