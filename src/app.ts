import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import RecipeRoutes from "./routes/routes";

class App {
  public app: express.Application;
  public routes = new RecipeRoutes();
  

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRouters();
    this.intializeMongoDB();
  }

  /* initializing middlewares*/
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }

  /* initializing routers*/
  private initializeRouters() {
    this.app.use("/api", this.routes.apiRoutes);
  }

  /* initializing mongoBD*/
  private intializeMongoDB() {
    mongoose
      .connect(
        "mongodb://localhost:27017/Food-Place-DB?retryWrites=true&w=majority",
        { useUnifiedTopology: true, useNewUrlParser: true }
      )
      .then(() => {
        console.log("mongo connected successfully!!!");
      })

      .catch(err => {
        console.log(err);
      });
  }

  public listen(port: number) {
    this.app.listen(port, () => {
      console.log(`App listening on the port ${port}`);
    });
  }
}

export default App;

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());

// app.use("/api", routes);

// app.listen(port, err => {
//   if (!err) console.log(`server is running on port ${port}`);
// });

// mongoose
//   .connect(
//     "mongodb://localhost:27017/Food-Place-DB?retryWrites=true&w=majority",
//     { useUnifiedTopology: true, useNewUrlParser: true }
//   )
//   .then(() => {
//     console.log("mongo connected successfully");
//   })

//   .catch(err => {
//     console.log(err);
//   });
