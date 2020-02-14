import RecipesModel from "../models/recipes";
import * as express from "express";

class RecipeController {
  constructor() {}

  /** controller for GET Recipes */
  getRecipes = (req: express.Request, res: express.Response) => {
    RecipesModel.find((err, doc) => {
      if (err) res.status(400).json(err);
      else res.status(200).json(doc);
    });
  };

  /** controller for POST Recipes */
  addRecipes = (req: express.Request, res: express.Response) => {
    const recipesModel = new RecipesModel(req.body);
    recipesModel.save((err, doc) => {
      if (err) res.status(400).json(err);
      else {
        res.status(200).json(doc);
      }
    });
  };
}

export default RecipeController;
