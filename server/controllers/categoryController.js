const categoryService = require("../services/categoryService");

class CategoryController {

    async createCategory(req, res) {
        try {
            const { name } = req.body;
            const category = await categoryService.createCategory(name);

            return res.json({ category });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: `${error}` });
        };
    };

    async deleteCategory(req, res) {
        try {
            const { id } = req.body;
            await categoryService.deleteCategory(id);

            return res.json({ message: `Category ${id} was deleted.` });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: `${error}` });
        };
    };

    async getAllCategories(req, res) {
        try {
            let { limit, page } = req.query;
            page = page || 1;
            limit = limit || 9;

            let offset = page * limit - limit;

            const categories = await categoryService.getAllCategories(limit, offset);

            return res.json({ categories });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: `${error}` });
        };
    };

    async renameCategory (req, res) {
        try {
            const { id, name } = req.body;

            await categoryService.renameCategory(id, name);

            return res.json({ message: `Category ${id} was renamed` });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: `${error}` });
        };
    }
};

module.exports = new CategoryController();