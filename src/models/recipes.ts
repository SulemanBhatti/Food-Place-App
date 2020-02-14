import * as mongoose from "mongoose";

const recipesDetail = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true,
      enum: ["breakfast", "snack", "lunch", "dinner"]
    },
    type: {
      type: String,
      required: true,
      enum: ["weightloss", "weightgain", "weightmaintain"]
    },
    price: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const RecipeModel = mongoose.model("Recipe", recipesDetail);
export default RecipeModel;
