import * as mongoose from "mongoose";

const recipesDetail = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Recipe = mongoose.model("Recipe", recipesDetail);
module.exports = Recipe;
