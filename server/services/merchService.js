const { Merch } = require("../models/models");

class MerchService {

    async createMerch(name, desc, price, status, img) {
        const imgData = img === null ? null : JSON.stringify(img);
        const merch = await Merch.create({ name, desc, price, status, img: imgData });
        return merch;
    };

    async deleteMerch(id) {
        const candidate = await Merch.findOne({ where: { id } });
        if (!candidate) {
            throw new Error("Unknown merch.");
        };

        await Merch.destroy({ where: { id } });
    };

    async setMerchStatus(id, status) {
        const candidate = await Merch.findOne({ where: { id } });
        if (!candidate) {
            throw new Error("Unknown merch.");
        };

        await Merch.update(
            { status: status },
            { where: { id } }
        );
    };

    async setMerchPrice(id, price) {
        const candidate = await Merch.findOne({ where: { id } });
        if (!candidate) {
            throw new Error("Unknown merch.");
        };

        await Merch.update(
            { price: price },
            { where: { id } }
        );
    };

    async getAllMerch(limit, offset, categoryId, companyId) {
        let merch;

        if (categoryId && !companyId) {
            merch = await Merch.findAndCountAll(
                { where: { categoryId } },
                { limit, offset }
            );
        } else if (categoryId && companyId) {
            merch = await Merch.findAndCountAll(
                { where: { categoryId, companyId } },
                { limit, offset }
            );
        } else if (!categoryId && companyId) {
            merch = await Merch.findAndCountAll(
                { where: { companyId } },
                { limit, offset }
            );
        } else {
            merch = await Merch.findAndCountAll(
                { limit, offset }
            );
        };

        return merch;
    };

    async getOneMerch(id) {
        const merch = await Merch.findOne({ where: { id } });
        return merch;
    };
};

module.exports = new MerchService();