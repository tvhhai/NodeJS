"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
// **** Init express **** //
const app = (0, express_1.default)();
// **** Set basic express settings **** //
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use(express_1.default.urlencoded({ extended: true }));
// app.use(cookieParser(EnvVars.cookieProps.secret));
// ****  Show routes called in console during development ****//
app.use((0, morgan_1.default)("dev"));
// **** CORS setup ****//
app.use((0, cors_1.default)());
// **** Parse requests of content-type - application/json ****//
app.use(body_parser_1.default.json());
// **** Parse requests of content-type - application/x-www-form-urlencoded ****//
app.use(body_parser_1.default.urlencoded({ extended: true }));
// **** Connect MongoDB **** //
(0, database_1.default)();
// **** Add API routes **** //
app.use("/api", routes_1.default);
// **** loggerMiddleware **** //
function loggerMiddleware(err, request, response, next) {
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
exports.default = app;
