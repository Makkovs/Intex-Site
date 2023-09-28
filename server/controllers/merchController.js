const merchService = require("../services/merchService");
const errorHandler = require("../utils/errorHandler");

class MerchController {

    async createMerch(req, res) {
        errorHandler(async () => {
            const { name, desc, price, status, companyId, categoryId } = req.body;
            const merch = await merchService.createMerch(name, desc, price, status, companyId, categoryId);

            return res.json({ merch });
        })(req, res);
    };

    async deleteMerch(req, res) {
        errorHandler(async () => {
            const { id } = req.body;
            await merchService.deleteMerch(id);

            return res.json({ message: `Merch ${id} was deleted.` });
        })(req, res);
    };

    async setMerchStatus(req, res) {
        errorHandler(async () => {
            const { id, status } = req.body;
            await merchService.setMerchStatus(id, status);

            return res.json({ message: `Seted status ${status} for Merch ${id}` });
        })(req, res);
    };

    async setMerchPrice(req, res) {
        errorHandler(async () => {
            const { id, price } = req.body;
            await merchService.setMerchPrice(id, price);

            return res.json({ message: `Seted price ${price} for Merch ${id}` });
        })(req, res);
    };

    async getAllMerch(req, res) {
        errorHandler(async () => {
            let { limit, page, categoryId, companyId } = req.query;
            page = page || 1;
            limit = limit || 9;

            let offset = page * limit - limit;

            const merch = await merchService.getAllMerch(limit, offset, categoryId, companyId);
            return res.json({ merch });
        })(req, res);
    };

    async getOneMerch(req, res) {
        errorHandler(async () => {
            let { id } = req.params;
            const merch = await merchService.getOneMerch(id);

            return res.json({ merch });
        })(req, res);
    };
};

module.exports = new MerchController();