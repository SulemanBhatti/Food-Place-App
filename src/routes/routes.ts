import * as express from "express";
import RecipeController from "../controllers/recipes";

class RecipeRoutes {
  public recipeController = new RecipeController();
  public apiRoutes = express.Router();

  constructor() {
    this.intializingRequests();
  }

  /*intializing requests for recipes*/
  private intializingRequests() {
    /* Recipe routes and requests */
    this.apiRoutes.post("/recipes", this.recipeController.addRecipes);
    this.apiRoutes.get("/recipes", this.recipeController.getRecipes);
  }
}

export default RecipeRoutes;
