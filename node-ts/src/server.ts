import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";
import express, { Request, Response, NextFunction } from "express";
import connect from "./config/database";
import BaseRouter from "./routes";
import cors from "cors";
import bodyParser from "body-parser";
import serverless from "serverless-http";

// **** Init express **** //

const app = express();

// **** Set basic express settings **** //

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser(EnvVars.cookieProps.secret));

// ****  Show routes called in console during development ****//

app.use(morgan("dev"));

// **** CORS setup ****//

app.use(cors());

// **** Parse requests of content-type - application/json ****//

app.use(bodyParser.json());

// **** Parse requests of content-type - application/x-www-form-urlencoded ****//

app.use(bodyParser.urlencoded({ extended: true }));

// **** Connect MongoDB **** //

connect();

// **** Add API routes **** //

app.use("/api", BaseRouter);

// **** loggerMiddleware **** //

function loggerMiddleware(
  err: any,
  request: express.Request,
  response: express.Response,
  next: NextFunction
) {
  // set locals, only providing error in development
  response.locals.message = err.message;
  response.locals.error = response.app.get("env") === "development" ? err : {};

  // render the error page
  response.status(err.status || 500);
  response.render("error");

  console.log(`${request.method} ${request.path}`);
  next();
}

app.use(loggerMiddleware);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

app.use("/", function (req, res) {
  res.send({ hello: "Hello world" });
});

export default app;
module.exports.handler = serverless(app);

 