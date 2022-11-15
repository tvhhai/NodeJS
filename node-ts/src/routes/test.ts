import express from "express";
const router = express.Router();

/* GET users listing. */
router.get("/test", function (req, res) {
  res.send({ test: "test" });
});

export default router;
