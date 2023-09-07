const { Merch } = require("../models/models");

class MerchService {

    async createMerch(name, desc, price, status) {
        const merch = await Merch.create({ name, desc, price, status });
        return merch;
    };

    async deleteMerch(id) {
        const candidate = await Merch.findOne({ where: { id } });
        if (!candidate) {
            throw new Error("Unknown merch.");
        };

        await Merch.destroy({ where: { id } });
    };

    async setMerchStatus(status, id) {
        const candidate = await Merch.findOne({ where: { id } });
        if (!candidate) {
            throw new Error("Unknown merch.");
        };

        await Merch.update(
            { status: status },
            { where: { id } }
        );
    };

    async getAllMerch(limit, offset) {
        const merch = await Merch.findAndCountAll({ limit, offset });
        return merch;
    };

    async getOneMerch(id) {
        const merch = await Merch.findOne({ where: { id } });
        return merch;
    };
};

module.exports = new MerchService();