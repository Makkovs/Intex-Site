const merchService = require("../services/merchService");

class MerchController {

    async createMerch(req, res) {
        try {
            const { name, desc, price, status } = req.body;
            const merch = await merchService.createMerch(name, desc, price, status);

            return res.json({ merch });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: `${error}` });
        };
    };

    async deleteMerch(req, res) {
        try {
            const { id } = req.body;
            await merchService.deleteMerch(id);

            return res.json({ message: `Merch ${id} was deleted.` });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: `${error}` });
        };
    };

    async setMerchStatus(req, res) {
        try {
            const { status, id } = req.body;
            await merchService.setMerchStatus(status, id);

            return res.json({ message: `Set status ${status} for Merch ${id}` });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: `${error}` });
        };
    };

    async getAllMerch(req, res) {
        try {
            let { limit, page } = req.query;
            page = page || 1;
            limit = limit || 9;

            let offset = page * limit - limit;

            const merch = await merchService.getAllMerch(limit, offset);
            return res.json({ merch });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: `${error}` });
        };
    };

    async getOneMerch(req, res) {
        try {
            let { id } = req.params;
            const merch = await merchService.getOneMerch(id);

            return res.json({ merch });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: `${error}` });
        };
    };
};

module.exports = new MerchController();