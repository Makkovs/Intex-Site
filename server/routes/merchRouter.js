const Router = require("express");

const router = new Router();

const merchController = require("../controllers/merchController");

router.post("/create", merchController.createMerch);
router.post("/delete", merchController.deleteMerch);
router.post("/set-status", merchController.setMerchStatus);
router.post("/set-price", merchController.setMerchPrice);
router.get("/get-all", merchController.getAllMerch);
router.get("/:id", merchController.getOneMerch);

module.exports = router;