const Router = require("express");

const router = new Router();

const userController = require("../controllers/userController");

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.post("/auth", userController.check);
router.get("/get-user", userController.getUser);

module.exports = router;