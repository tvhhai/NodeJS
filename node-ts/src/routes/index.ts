import { Router } from "express";
import testRouter from "./test";

const apiRouter = Router();
apiRouter.use(testRouter);

export default apiRouter;
