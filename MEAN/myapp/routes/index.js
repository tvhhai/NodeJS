const indexController = require("../app/controllers/index");
const userRouter = require("./users");

/* GET home page. */
// router.get('/', index.get);

function route(app) {
  app.get("/:id", indexController.getById);
  app.get("/", indexController.get);
  app.post("/", indexController.add);
  app.put("/", indexController.update);
  app.delete("/", indexController.delete);

  app.use("/users", userRouter);
}

module.exports = route;
