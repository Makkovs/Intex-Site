const merchService = require("../services/merchService");

class MerchController {

    async createMerch(req, res) {
        errorHandler(async () => {
            const { name, desc, price, status } = req.body;
            const merch = await merchService.createMerch(name, desc, price, status);

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
            const { status, id } = req.body;
            await merchService.setMerchStatus(status, id);

            return res.json({ message: `Set status ${status} for Merch ${id}` });
        })(req, res);
    };

    async getAllMerch(req, res) {
        errorHandler(async () => {
            let { limit, page } = req.query;
            page = page || 1;
            limit = limit || 9;

            let offset = page * limit - limit;

            const merch = await merchService.getAllMerch(limit, offset);
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