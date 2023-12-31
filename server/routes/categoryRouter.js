const Router = require("express");

const router = new Router();

const categoryController = require("../controllers/categoryController");

router.post("/create", categoryController.createCategory);
router.post("/delete", categoryController.deleteCategory);
router.get("/get-all", categoryController.getAllCategories);
router.get("/get-one", categoryController.getOneCategory);
router.post("/rename", categoryController.renameCategory);

module.exports = router;