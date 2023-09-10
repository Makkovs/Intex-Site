const Router = require("express");

const characteristicController = require("../controllers/characteristicController");

const router = new Router();

router.post("/create", characteristicController.createCharacteristic);
router.post("/delete", characteristicController.deleteCharacteristic);
router.get("/get-all", characteristicController.getAllCharacteristics);

module.exports = router;