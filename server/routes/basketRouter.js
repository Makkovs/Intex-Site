const Router = require("express");

const router = new Router();

const basketController = require("../controllers/basketController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/get", authMiddleware, basketController.getBasket);
router.post("/add-merch", authMiddleware, basketController.addMerchToBasket);
router.post("/remove-merch", authMiddleware, basketController.removeMerchFromBasket);

module.exports = router;