const Router = require("express");

const router = new Router();

router.post("/create");
router.post("/delete");
router.post("/getAll");

module.exports = router;