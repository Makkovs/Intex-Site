const Router = require("express");

const categoryRouter = require("./categoryRouter");
const characteristicRouter = require("./characteristicRouter");
const commentaryRouter = require("./commentaryRouter");
const companyRouter = require("./companyRouter");
const merchRouter = require("./merchRouter");
const userRouter = require("./userRouter");
const basketRouter = require("./basketRouter");

const router = new Router();

router.use("/category", categoryRouter);
router.use("/characteristic", characteristicRouter);
router.use("/commentary", commentaryRouter);
router.use("/company", companyRouter);
router.use("/merch", merchRouter);
router.use("/user", userRouter);
router.use("/basket", basketRouter)

module.exports = router;