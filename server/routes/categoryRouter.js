const Router = require("express");

const router = new Router();

const categoryController = require("../controllers/categoryController");

router.post("/create", categoryController.createCategory);
router.post("/delete", categoryController.deleteCategory);
router.post("/getAll", categoryController.getAllCategories);

module.exports = router;