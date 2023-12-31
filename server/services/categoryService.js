const { Category } = require("../models/models");

class CategoryService {

    async createCategory(name) {
        const candidate = await Category.findOne({ where: { name } });

        if (candidate) {
            throw new Error("This category already exist!");
        };

        const category = await Category.create({ name });
        return category;
    };

    async deleteCategory(id) {
        const candidate = await Category.findOne({ where: { id } });

        if (!candidate) {
            throw new Error("Unknown category.");
        };

        await Category.destroy({ where: { id } });
    };

    async getAllCategories() {
        const categories = await Category.findAndCountAll();
        return categories;
    };

    async getOneCategory(id) {
        const category = await Category.findOne({ where: { id } });
        return category;
    };

    async renameCategory(id, name) {
        const category = await Category.findOne({ where: { id } });
        if (!category) {
            throw new Error("This category is not exist!");
        };

        const candidate = await Category.findOne({ where: { name } });
        if (candidate) {
            throw new Error("This category is arleady exist!");
        };

        await Category.update(
            { name: name },
            { where: { id } }
        );
    };
};

module.exports = new CategoryService();