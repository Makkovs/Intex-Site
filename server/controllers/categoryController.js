const categoryService = require("../services/categoryService");
const errorHandler = require("../utils/errorHandler");

class CategoryController {

    async createCategory(req, res) {
        errorHandler(async () => {
            const { name } = req.body;
            const category = await categoryService.createCategory(name);

            res.json({ category });
        })(req, res);
    };

    async deleteCategory(req, res) {
        errorHandler(async () => {
            const { id } = req.body;
            await categoryService.deleteCategory(id);

            return res.json({ message: `Category ${id} was deleted.` });
        })(req, res);
    };

    async getAllCategories(req, res) {
        errorHandler(async () => {
            const categories = await categoryService.getAllCategories();
            return res.json({ categories });
        })(req, res);
    };

    async renameCategory(req, res) {
        errorHandler(async () => {
            const { id, name } = req.body;

            await categoryService.renameCategory(id, name);

            return res.json({ message: `Category ${id} was renamed` });
        })(req, res);
    };
};

module.exports = new CategoryController();